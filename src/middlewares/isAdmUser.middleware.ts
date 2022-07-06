import { Request, Response, NextFunction } from "express";

const isAdmUserMiddleware = (req:Request, res:Response, next:NextFunction) => {

  if (!req.user.adm) {
    return res.status(403).json({
      message: "User is not Admin"
    })
  }

  next();
}

export default isAdmUserMiddleware;
