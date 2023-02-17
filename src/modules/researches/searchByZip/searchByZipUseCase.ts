import { prisma } from "../../../database/prismaClient"


export class SearchByZipUseCase {
    async execute(ZipCode: string) {
        const byZip = await prisma.house.findMany({
            where: {
                ZipCode: {
                    equals: ZipCode
                }
            },
            select: {
                street: true,
                Pool: true || false,
                Garage: true || false,
                ZipCode: true,

            },
        })

        if (!byZip) {
            throw new Error("No house found")
        }

        return byZip
    }

}   