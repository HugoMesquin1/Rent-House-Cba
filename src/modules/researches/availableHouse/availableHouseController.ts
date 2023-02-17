import { Request, Response } from 'express'
import { AvailableHouseUseCase } from "./availableHouseUseCase"

export class AvailableHouseController {
    async handle(request: Request, response: Response) {
        try {
            const { available } = request.query;

            const availableHouseUseCase = new AvailableHouseUseCase()

            const houses = await availableHouseUseCase.execute(Boolean(available))


            return response.json(houses);
        } catch (error) {
            return response.status(400).json
        }
    }
}