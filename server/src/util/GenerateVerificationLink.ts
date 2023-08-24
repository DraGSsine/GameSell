import crypto from 'crypto'
import Verification from '../models/Verification'
import mongoose from 'mongoose'
import { generateOTP } from './GenerateOTPcode'

export const GenerateVerificationLink = async (userId: mongoose.Types.ObjectId) => {
  // Generate a random token using crypto.randomBytes() and convert it to a hexadecimal string
  const OTPcode = generateOTP(4)
  const token = await new Verification({
    userId: userId,
    token: crypto.randomBytes(32).toString("hex"),
    OTPcode: OTPcode
  }).save();

  // Construct the verification link using the generated userId and token
  const url = `verify-email/${token.userId}/${token.token}`;

  // Return the verification link
  return {url , OTPcode};
}
