import { prisma } from "../../../database/prismaClient"


export class searchAllUseCase {
    async execute() {
        const all = await prisma.house.findMany({
            where: {},
            select: {
                street: true,
                Pool: true || false,
                Garage: true || false,
                ZipCode: true,

            }


        })
        return all
    }
}