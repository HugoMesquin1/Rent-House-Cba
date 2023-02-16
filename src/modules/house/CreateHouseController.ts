import { Request, Response } from "express";
import { CreateHouseUseCase } from "./CreateHouseUseCase";


export class CreateHouseController {
    async handle(request: Request, response: Response) {

        const createHouseUseCase = new CreateHouseUseCase()
        const { tenantId } = request
        const { street, ZipCode, Pool, Garage } = request.body

        const newHouse = await createHouseUseCase.execute({
            ZipCode,
            street,
            Pool,
            Garage,
            tenantId
        })

        return response.json({ newHouse })

    }
}