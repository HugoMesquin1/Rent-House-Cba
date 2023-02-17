import { prisma } from "../../../database/prismaClient"
import { isValidZipCodeCuiaba } from "../../../utils/Validations"

interface ICreateHouse {
    tenantId: string
    street: string
    ZipCode: string
    Pool: boolean
    Garage: boolean
}

export class CreateHouseUseCase {
    async execute({
        tenantId,
        street,
        ZipCode,
        Pool,
        Garage,
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
            },
        })

        console.log(tenantId)

        return house
    }
}