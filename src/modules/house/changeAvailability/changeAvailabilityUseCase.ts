import { prisma } from "../../../database/prismaClient"


interface IAvaliabilityHouseRequest {
    id: string;
    tenantId: string;
    isAvailable: boolean;
}

export class ChangeAvailabilityHouseUseCase {
    async execute({ id, tenantId, isAvailable }: IAvaliabilityHouseRequest) {
        const checkDate = await prisma.house.findFirstOrThrow({
            where: {
                id: id,
                tenantId: tenantId
            },
        });

        if (!checkDate) {
            throw new Error("It was not possible to delete this house.");
        }

        const updatedHouse = await prisma.house.update({
            where: {
                id: id,
            },
            data: {
                available: isAvailable
            }
        })

        return updatedHouse
    }
}
