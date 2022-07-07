import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/lisUsers.service";

const createUserController = async (req:Request, res:Response) => {
  try {
    const { nome, email, password, adm } = req.body;

    const newUser = await createUserService({nome, email, password, adm});

    return res.status(201).json(newUser);

  } catch (error) {
    if (error instanceof Error){

      return res.status(400).json({
        "message": error.message
      })
    }
  }
}

const listUsersController = async (req:Request, res:Response) => {

  const users = await listUsersService();
  
  return res.status(200).json(users);
}

const deleteUserController = async (req:Request, res:Response) => {
  try {
    const userId = req.params.userId;

    await deleteUserService(userId);

    return res.status(204).send();

  } catch (error) {
    if (error instanceof Error) {

      return res.status(400).json({
        "message": error.message
      })
    }
  }
}

export {listUsersController, createUserController, deleteUserController }