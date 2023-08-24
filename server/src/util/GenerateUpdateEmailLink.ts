import jwt from 'jsonwebtoken';
import Verification from '../models/Verification'
import mongoose from 'mongoose'
import { generateOTP } from './GenerateOTPcode'

export const GenerateUpdateEmailLink = async (userId: mongoose.Types.ObjectId,newEmail:string) => {
  // Generate a random token using crypto.randomBytes() and convert it to a hexadecimal string
  if(!process.env.JWT_KEY) throw new Error('JWT_KEY is not defind')
  const Token = jwt.sign({newEmail,userId},process.env.JWT_KEY)
  const token = await new Verification({
    userId: userId,
    token:Token,
    OTPcode: generateOTP(4)
  }).save();

  // Construct the verification link using the generated userId and token
  const url = `${process.env.DOMAIN}verification/update/update_email/${Token}`;

  // Return the verification link
  return url;
}
