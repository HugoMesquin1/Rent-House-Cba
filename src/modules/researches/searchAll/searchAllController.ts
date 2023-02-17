import { searchAllUseCase } from "./searchAllUseCase"
import { Request, Response } from "express"


export class SearchAllController {
    async handle(request: Request, response: Response) {
        const searchAll = new searchAllUseCase()

        const all = await searchAll.execute()

        return response.json(all)
    }
}