import { prisma } from "../../../database/prismaClient"

export class AvailableHouseUseCase {
    async execute(available: boolean) {
        let whereClause = {}
        if (available === true) {
            whereClause = { available: true }
        }

        const houses = await prisma.house.findMany({
            where: whereClause
        })

        if (houses.length === 0) {
            throw new Error("No houses found")
        }

        return houses
    }
}