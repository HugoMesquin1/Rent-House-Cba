import { Request, Response } from "express"
import { AuthLocatorUseCase } from "./AuthLocatorUseCase"


export class AuthLocatorController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body
        const authLocatorUseCase = new AuthLocatorUseCase()

        const token = await authLocatorUseCase.execute({
            username,
            password
        })

        return response.json(token)
    }
}
