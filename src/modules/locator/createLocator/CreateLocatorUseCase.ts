import { prisma } from "../../../database/prismaClient"
import { hash } from "bcrypt"
import { isValidNumber, isValidUsername } from "../../../utils/Validations"

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

        if (contactExist) {
            throw new Error("Contact already exists")
        }

        if (!isValidUsername(username)) {
            throw new Error("Invalid username")
        }

        if (!isValidNumber(contact)) {
            throw new Error("Invalid phone number")
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