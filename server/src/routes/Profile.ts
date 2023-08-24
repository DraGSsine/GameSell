import { Router } from "express";
import {updateProfileEmail,updateProfilePassword} from '../controllers/profile'
export const ProfileRouter = Router()

ProfileRouter.put('/email',updateProfileEmail)
ProfileRouter.put('/password',updateProfilePassword)
