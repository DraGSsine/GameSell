import { Router } from "express";
import { verifiyResetPassword, resetPassword , resendVerificationLink, verification, verificationOTP,verifyAndUpdateProfileEmail } from "../controllers/verification";
export const verificationRoute = Router();

verificationRoute.get("/verify_email/:userId/:token",verification);
verificationRoute.post("/verify-otp",verificationOTP);
verificationRoute.get("/resend",resendVerificationLink);
verificationRoute.get('/update/update_email/:token',verifyAndUpdateProfileEmail)
verificationRoute.post('/reset_password',resetPassword)
verificationRoute.post('/reset_password/:userId/:token',verifiyResetPassword)

