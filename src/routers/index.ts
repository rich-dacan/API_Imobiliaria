import { Router } from "express";
import {createUserController, listUsersController} from "../controllers/user.controller";

const userRouters = Router();

userRouters.post("", createUserController);
userRouters.get("", listUsersController);

export default userRouters;