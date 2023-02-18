import { FilterValueUseCase } from "./filterValueUseCase"
import { Request, Response } from "express"

export class FilterValueController {
    async handle(request: Request, response: Response) {
        const { minValue, maxValue } = request.body
        const filterValueUseCase = new FilterValueUseCase()
        const houses = await filterValueUseCase.execute(minValue, maxValue)

        return response.json(houses)
    }
}