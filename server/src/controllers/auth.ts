import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import validation from "../util/ValidateUser.ts";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { GenerateVerificationLink } from "../util/GenerateVerificationLink.ts";
import { sendEmail } from "../util/SendEmail.ts";
// configure
dotenv.config();
const jwtKey = process.env.JWT_KEY!;

export const Register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // crypt the password
  const HashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: HashedPassword,
  });

  // validate the data before creating a new user
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.message);

  try {
    // check if the user already exists in the database
    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) return res.status(400).send("User already exists");

    // creating a new user
    await newUser.save();

    // send email to the user
    const {url,OTPcode} = await GenerateVerificationLink(newUser._id)
    const verifyLink = `${process.env.DOMAIN}verification/${url}`;

    sendEmail(email, verifyLink,'VerifyEmailTemplate.ejs',"Verify Email",OTPcode);

    res.status(200).json({ id: newUser._id });
  } catch (error) {
    res.status(400).json(error);
  }
};
export const Login = async (req: Request, res: Response) => {
  // validate the data before creating new user
  const { error } = validation(req.body);
  if (error) return res.status(400).send(error.message);

  // get the user from database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is wrong");

  if (!user.verified) return res.status(401).send("Pleas Verifiey Your Email!");
  // check if the passwords are correct
  const HashedPassword = await bcrypt.compare(
    req.body.password,
    user!.password!
  );
  if (!HashedPassword)
    return res.status(400).send("Email or password is wrong");

  // Create and assign a token
  const token = jwt.sign({ id: user._id }, jwtKey, { expiresIn: "30d" });
  res.header("authorization", `Bearer ${token}`);
  res.status(200).json({ token, id: user._id });

  // res.header("auth-token",token).send("login sucssefuly");
};
