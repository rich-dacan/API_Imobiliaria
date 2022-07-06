import { Router } from "express";
import {createUserController, listUsersController} from "../controllers/user.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRouters = Router();

userRouters.post("", createUserController);
userRouters.get("", ensureAuthMiddleware, listUsersController);

export default userRouters;