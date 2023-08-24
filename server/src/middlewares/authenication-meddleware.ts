import { NextFunction, Response, Request, RequestHandler } from "express";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";
import { UserType } from "../types/types";
dotenv.config();

interface RequestWithUserRole extends Request {
  user?: UserType;
}

export const auth: RequestHandler = async (
  req: RequestWithUserRole,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer"))return res.status(401).json({ error: "Not authenticated" });

    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload;
    const user = await User.findById(decodedToken.id).select("-password");

    if (!user) return res.status(401).json({ error: "User not found" })
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};
