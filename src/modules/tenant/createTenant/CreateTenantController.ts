import { Request, Response } from "express"
import { CreateTenantUseCase } from "./createTenantUseCase"


export class CreateTenantController {
    async handle(request: Request, response: Response) {
        const createTenantUseCase = new CreateTenantUseCase()

        const { username, password, contact } = request.body

        const tenant = await createTenantUseCase.execute({
            username,
            password,
            contact
        })

        return response.json({
            message: "User created",
            tenant: tenant
        })
    }
}