import { Router } from "express";
import {createUserController, deleteUserController, listUsersController} from "../controllers/user.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import isAdmUserMiddleware from "../middlewares/isAdmUser.middleware";

const userRouters = Router();

userRouters.post("", createUserController);
userRouters.get("", ensureAuthMiddleware, isAdmUserMiddleware, listUsersController);
userRouters.delete(
  "/:userId", 
  ensureAuthMiddleware, 
  isAdmUserMiddleware, 
  deleteUserController
);

export default userRouters;
