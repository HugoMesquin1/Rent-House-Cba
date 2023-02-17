import { prisma } from "../../../database/prismaClient"
import { isValidZipCodeCuiaba } from "../../../utils/Validations"

interface ICreateHouse {
    tenantId: string
    street: string
    ZipCode: string
    Pool: boolean
    Garage: boolean
    available: boolean
    price: number
}

export class CreateHouseUseCase {
    async execute({
        tenantId,
        street,
        ZipCode,
        Pool,
        Garage,
        available,
        price
    }: ICreateHouse) {

        if (!isValidZipCodeCuiaba(ZipCode)) {
            throw new Error("CEP inválido para Cuiabá");
        }

        const house = await prisma.house.create({
            data: {
                tenantId,
                street,
                ZipCode,
                Pool,
                Garage,
                available,
                price,
            },
        })

        console.log(tenantId)

        return house
    }
}