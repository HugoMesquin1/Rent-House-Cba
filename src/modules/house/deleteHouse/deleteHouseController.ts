import { Request, Response } from "express"
import { DeleteHouseUseCase } from "./deleteHouseUseCase"

export class DeleteHouseController {
    async handle(request: Request, response: Response) {
        const deleteHouseUseCase = new DeleteHouseUseCase()

        const { id } = request.params
        const tenantId = request.tenantId



        await deleteHouseUseCase.execute({ id, tenantId })

        return response.send({
            success: true,
            message: "House deleted successfully",
        })
    }
}