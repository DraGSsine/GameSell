import { Router } from "express";
import { Register,Login } from "../controllers/auth.ts";
export const AuthRoute = Router();

AuthRoute.post("/register", Register);
AuthRoute.post("/login", Login);
