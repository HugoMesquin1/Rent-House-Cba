import { Prisma } from '@prisma/client'
import { prisma } from "../../../database/prismaClient"

type HouseWhereInputWithFilter = Prisma.HouseWhereInput & {
    price?: {
        gte?: number;
        lte?: number;
    };
}


export class FilterValueUseCase {
    async execute(minValue: number, maxValue: number) {
        const filterValue: HouseWhereInputWithFilter = {
            price: {
                gte: minValue,
                lte: maxValue,
            },
        }
        const houses = await prisma.house.findMany({ where: filterValue });

        if (houses.length === 0) {
            return { message: "We couldn't find any homes based on your price filter." }
        }

        return houses;
    }
}