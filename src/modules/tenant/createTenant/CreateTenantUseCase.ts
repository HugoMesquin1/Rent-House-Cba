import { prisma } from "../../../database/prismaClient"
import { hash } from "bcrypt"



interface ICreateTenant {
    username: string
    password: string
    contact: string
}


export class CreateTenantUseCase {
    async execute({ username, password, contact }: ICreateTenant) {
        const TenantExists = await prisma.tenant.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                },
            },
        })

        if (TenantExists) {
            throw new Error("Tenant already exists")
        }

        const ContactExist = await prisma.tenant.findFirst({
            where: {
                contact: {
                    equals: String(contact),
                    mode: "insensitive",
                },
            },
        })

        if (ContactExist !== null) {
            throw new Error("Contact already exists")
        }

        const hashPassword = await hash(password, 10)

        const tenant = await prisma.tenant.create({
            data: {
                username,
                password: hashPassword,
                contact: String(contact)
            },
        })
        return tenant

    }
}