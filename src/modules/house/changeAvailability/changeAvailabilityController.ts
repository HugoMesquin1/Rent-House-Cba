import { ChangeAvailabilityHouseUseCase } from "./changeAvailabilityUseCase"
import { Request, Response } from "express";


export class ChangeAvailabilityHouseController {
    async handle(request: Request, response: Response) {
        const { isAvailable } = request.body
        const { id } = request.params
        const tenantId = request.tenantId

        const changeAvailabilityHouseUseCase = new ChangeAvailabilityHouseUseCase();

        const house = await changeAvailabilityHouseUseCase.execute({ id, tenantId, isAvailable })

        return response.json(house)
    }
}