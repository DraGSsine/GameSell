import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../models/User";
import dotenv from "dotenv";
import Verification from "../models/Verification";
import { GenerateVerificationLink } from "../util/GenerateVerificationLink";
import { sendEmail } from "../util/SendEmail";
import mongoose from "mongoose";
import jwt, { JwtPayload } from "jsonwebtoken";
import validation from "../util/ValidateUser";
import { GenerateResetPasswordLink } from "../util/GenerateResetPasswordLink";
import { EmailValidate, PasswordValidate } from "../util/Validations";
import ResetPassword from "../models/ResetPassword";
// Configure dotenv
dotenv.config();

// Verify user's email based on userId and token

export const verification = async (req: Request, res: Response) => {
  try {
    const { userId, token } = req.params;

    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid link" });
    }

    const user = await User.findOne({ _id: userId });
    console.log({
      token,
      userId
    })
    const verificationToken = await Verification.findOne({ userId, token });

    // Check if user or verification token doesn't exist
    if (!user || !verificationToken) {
      return res.status(400).json({ error: "Invalid link" });
    }

    // Update user's verified status and remove verification token
    await User.updateOne({ _id: userId }, { verified: true });
    await Verification.findOneAndRemove({ userId ,token});

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Verify user's email based on OTP code
export const verificationOTP = async (req: Request, res: Response) => {
  try {
    const { OTPcode } = req.body;
    const userId = req.headers.authorization?.split(" ")[1];
    const verificationUser = await Verification.findOne({ userId });

    // Check if OTP code doesn't match
    if (verificationUser?.OTPcode !== OTPcode) {
      return res.status(400).json("Invalid OTP code");
    }

    // Update user's verified status and remove verification token
    await User.updateOne({ _id: userId }, { verified: true });
    await Verification.findOneAndRemove({ userId });
    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Resend verification link to user's email
export const resendVerificationLink = async (req: Request, res: Response) => {
  const userId = req.headers.authorization?.split(" ")[1];
  const user = await User.findOne({ _id: userId });
  const email = user?.email;
  try {
    // Check if user or email doesn't exist
    if (!user || !email) return res.json({ message: "Something went wrong" });

    // Generate new verification link and send email
    const { url, OTPcode } = await GenerateVerificationLink(user._id);
    const verifyLink = `${process.env.DOMAIN}verification/${url}`;

    sendEmail(email, verifyLink, "VerifyEmailTemplate.ejs","Verify Email", OTPcode);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const verifyAndUpdateProfileEmail = async (
  req: Request,
  res: Response
) => {
  const { token } = req.params;
  try {
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY is not defined");
    }
    const TokenEmailDecoded = jwt.verify(
      token,
      process.env.JWT_KEY
    ) as JwtPayload;
    const { newEmail, userId } = TokenEmailDecoded;
    await User.findOneAndUpdate(
      { _id: userId }, // Filter condition
      { email: newEmail } // Update data
    );
    res.status(200).json("Email Updated Successufly");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error decoding token" });
  }
};
export const resetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const { error } = EmailValidate(email);
  if (error) return res.status(400).json({ error });
  if (!user) return res.status(400).json({ message: "User not found" });

  const { url } = await GenerateResetPasswordLink(user._id);
  const verifyLink = `${process.env.DOMAIN}${url}`;
  sendEmail(email, verifyLink, "ResetPassword.ejs","Reset Password")

  res.json({message:'Email set successfuly'});
};
export const verifiyResetPassword = async (req: Request, res: Response) => {
  const { token, userId } = req.params;
  const { password } = req.body;
  const { error } = PasswordValidate(password);
  if(error) return res.status(400).json(error)
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid link" });
  }

  const user = await User.findOne({ _id: userId });
  const verificationToken = await ResetPassword.findOne({ userId, token });
  // Check if user or verification token doesn't exist
  if (!user || !verificationToken) {
    return res.status(400).json({ error: "Invalid link" });
  }
  const HashedPassword = await bcrypt.hash(password, 10);

  // Update user's verified status and remove verification token
  await User.updateOne({ _id: userId }, { password: HashedPassword });
  await ResetPassword.findOneAndRemove({token});
  res.json({ message: "password updated successfuly" });
};
