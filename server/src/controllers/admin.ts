import { Request,Response } from "express";
interface RequestWithUserRole extends Request {
    user: string;
  }
export const Admin:any = (req: RequestWithUserRole, res: Response) => {
  res.json(req.user);
};
