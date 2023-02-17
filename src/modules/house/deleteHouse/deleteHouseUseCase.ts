import { prisma } from "../../../database/prismaClient"

interface IDeleteHouseRequest {
    id: string
    tenantId: string
}

export class DeleteHouseUseCase {
    async execute({ id, tenantId }: IDeleteHouseRequest) {
        console.log(`id-${id}`)
        console.log(`tenantId-${tenantId}`)
        const findHouse = await prisma.house.findFirstOrThrow({
            where: {
                id: id,
                tenantId: tenantId
            },
        })

        console.log(findHouse)

        if (!findHouse) {
            throw new Error("It was not possible to delete this house.")
        }

        const deletedHouse = await prisma.house.delete({
            where: {
                id: id
            }
        })

        return deletedHouse
    }
} 