import { prisma } from "../../../database/prismaClient"
import { hash } from "bcrypt"


interface ICreateLocator {
    username: string
    password: string
    contact: string
}


export class CreateLocatorUseCase {
    async execute({ username, password, contact }: ICreateLocator) {
        const locatorExists = await prisma.locator.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                },
            },
        })

        if (locatorExists) {
            throw new Error("Locator already exists")
        }

        const contactExist = await prisma.locator.findFirst({
            where: {
                contact: {
                    equals: String(contact),
                    mode: "insensitive",
                },
            },
        })

        if (contactExist !== null) {
            throw new Error("Contact already exists")
        }

        const hashPassword = await hash(password, 10)

        const locator = await prisma.locator.create({
            data: {
                username,
                password: hashPassword,
                contact: String(contact)
            },
        })

        return locator
    }
}


