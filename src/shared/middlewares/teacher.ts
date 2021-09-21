import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { ProfileEnum } from "../enum/ProfileEnum";
import AppError from "../errors/AppError";

export default function teacher(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if(request.user.profile === ProfileEnum.TEACHER) {
    return next();
  } else {
    throw new AppError("Seu perfil não tem acesso a essa funcionalidade!!!", 401);
  }
}
