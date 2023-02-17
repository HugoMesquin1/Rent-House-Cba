import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"


interface IPayload {
    sub: string
}



export async function EnsureAuthenticateTenant(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization


    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing !"
        })
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub } = verify(
            token,
            "167db8c94a5fb61b3126b1d064c75abb"
        ) as IPayload

        request.tenantId = sub



        return next()
    } catch (err) {
        return response.status(401).json({
            message: "Invalid Token!"
        })
    }
}