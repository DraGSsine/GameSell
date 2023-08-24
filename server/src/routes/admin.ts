import { Router } from "express";
import { Admin } from "../controllers/admin.ts";
export const AdminRoute = Router();

AdminRoute.get("/register", Admin);
