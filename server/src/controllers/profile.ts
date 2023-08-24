import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../models/User";
import { EmailValidate, PasswordValidate } from "../util/Validations";
import jwt, { JwtPayload } from "jsonwebtoken";
import { GenerateUpdateEmailLink } from "../util/GenerateUpdateEmailLink";
import { sendEmail } from "../util/SendEmail";

export const updateProfileEmail = async (req: Request, res: Response) => {
  try {
    const { newEmail } = req.body;

    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(400).json("Not authenticated");

    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY!) as {
      id: string;
    };

    const { error } = EmailValidate(newEmail);
    if (error) return res.status(400).send(error.message);

    const isNewEmailExist = await User.findOne({ email: newEmail }).select({
      email: 1,
    });
    if (isNewEmailExist) return res.status(400).send("Email is already in use");

    const user = await User.findOne({ _id: decodedToken.id }).select({
      email: 1,
      "userUpdates.emailLastUpdate": 1,
    });
    if (!user) return res.status(400).send("User not found");

    // Proceed with the email change process
    const currentTime = new Date();
    const lastUpdate = user.userUpdates?.emailLastUpdate || user.createdAt;

    const timeElapsed = currentTime.getTime() - lastUpdate.getTime();
    const timeThreshold = 3 * 30 * 24 * 60 * 60 * 1000; // 3 months in milliseconds

    if (timeElapsed < timeThreshold) {
      return res
        .status(400)
        .send("You can update your email once every 3 months");
    }
    user.userUpdates!.emailLastUpdate = currentTime;
    const Link = await GenerateUpdateEmailLink(user._id, newEmail);

    // Call your sendEmail function
    sendEmail(newEmail, Link, "VerifyNewEmailTemplate.ejs", "Verify Email");
    res.status(200).json({ message: "Verification email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateProfilePassword = async (req: Request, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(400).json("Not authenticated");

    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;

    const { error } = PasswordValidate(newPassword);
    if (error) return res.status(400).send(error.message);

    const user = await User.findOne({ _id: decodedToken.id }).select({
      email: 1,
      password: 1,
      "userUpdates.passwordLastUpdate": 1,
    });
    if (!user) return res.status(400).send(`user does not exist`);

    const isPasswordCurrect = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (currentPassword === newPassword) {
      return res
        .status(400)
        .send(
          "Oops! It looks like you entered your current password"
        );
    }
    if (!isPasswordCurrect)
      return res.status(400).send(`Password is not currect`);

    const currentTime = new Date();
    const lastUpdate = user.userUpdates?.passwordLastUpdate || user.createdAt;

    const timeElapsed = currentTime.getTime() - lastUpdate.getTime();
    const timeThreshold = 3 * 30 * 24 * 60 * 60 * 1000; // 3 months in milliseconds

    if (timeElapsed < timeThreshold) {
      return res
        .status(400)
        .send("You can update your email once every 3 months");
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.userUpdates!.passwordLastUpdate = currentTime;
    // Validate and save the user
    await user.save();

    res.send("Password updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
