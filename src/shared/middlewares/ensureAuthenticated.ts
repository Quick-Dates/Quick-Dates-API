import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { ProfileEnum } from "../enum/ProfileEnum";

import AppError from '../errors/AppError'


interface TokenPayload {
    id: string;
    tokenSuap: string;
    name: string;
    profile: ProfileEnum;
    course?: string;
    email: string;
    iat: number;
    exp: number;

}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
    ): void{
        const authHeader = request.headers.authorization

        if(!authHeader){
            throw new AppError('JWT token ausente', 401)
        }

        const [, token] = authHeader.split(' ')

        try{
            const decoded = verify(token, process.env.AUTH_SECRET as string)

            request.user = decoded as any;

            return next()
        } catch {
            throw new AppError('JWT token Inválido', 401)
        }
    }
