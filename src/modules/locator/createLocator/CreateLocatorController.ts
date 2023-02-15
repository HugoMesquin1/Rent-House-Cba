import { Request, Response } from "express"
import { CreateLocatorUseCase } from "./CreateLocatorUseCase"


export class CreateLocatorController {
    async handle(request: Request, response: Response) {
        const createLocatorUseCase = new CreateLocatorUseCase()

        const { username, password, contact } = request.body

        const locator = await createLocatorUseCase.execute({
            username,
            password,
            contact
        })

        return response.json({
            message: "User created",
            locator: locator
        })
    }

}