import { Request, Response } from "express";
import createUserSessionService from "../services/sessions/createSessionUser.service";

const createUserSessionController = async (req:Request, res:Response) => {

  const { email, password } = req.body;

  const token = await createUserSessionService({ email, password });

  return res.status(200).json({ token });
}

export { createUserSessionController }