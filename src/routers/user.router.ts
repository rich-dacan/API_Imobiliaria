import { Router } from "express";
import {createUserController, listUsersController} from "../controllers/user.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware";

const userRouters = Router();

userRouters.post("", createUserController);
userRouters.get("", ensureAuthMiddleware, isAdmUserMiddleware, listUsersController);

export default userRouters;