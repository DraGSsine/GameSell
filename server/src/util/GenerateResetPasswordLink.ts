import crypto from 'crypto'
import mongoose from 'mongoose'
import ResetPassword from '../models/ResetPassword';

export const GenerateResetPasswordLink = async (userId: mongoose.Types.ObjectId) => {
  // Generate a random token using crypto.randomBytes() and convert it to a hexadecimal string
  const token = await new ResetPassword({
    userId: userId,
    token: crypto.randomBytes(32).toString("hex"),
  }).save();

  // Construct the verification link using the generated userId and token
  const url = `verification/reset_password/${token.userId}/${token.token}`;

  // Return the verification link
  return {url};
}
