import { Request, Response } from "express"
import { SearchByZipUseCase } from "./searchByZipUseCase"


export class SearchByZipController {
    async handle(request: Request, response: Response) {
        const { zip } = request.params

        const searchByZipUseCase = new SearchByZipUseCase()

        const byZip = await searchByZipUseCase.execute(zip)

        console.log({ zip })


        return response.json(byZip)
    }
}