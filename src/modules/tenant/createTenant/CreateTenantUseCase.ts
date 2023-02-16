import { prisma } from "../../../database/prismaClient"
import { hash } from "bcrypt"
import { isValidNumber, isValidUsername } from "../../../utils/Validations"



interface ICreateTenant {
    username: string
    password: string
    contact: string
}


export class CreateTenantUseCase {
    async execute({ username, password, contact }: ICreateTenant) {
        const tenantExists = await prisma.tenant.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                },
            },
        })

        if (tenantExists) {
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

        if (!isValidUsername(username)) {
            throw new Error("Invalid username")
        }

        if (!isValidNumber(contact)) {
            throw new Error("Invalid phone number")
        }

        if (ContactExist) {
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