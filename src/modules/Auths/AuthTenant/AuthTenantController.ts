import { Request, Response } from "express"
import { AuthTenantUseCase } from "../AuthTenant/AuthTenantUseCase"

export class AuthTenantController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body
        const authTenantUseCase = new AuthTenantUseCase()

        const token = await authTenantUseCase.execute({
            username,
            password
        })

        return response.json(token)
    }
}
