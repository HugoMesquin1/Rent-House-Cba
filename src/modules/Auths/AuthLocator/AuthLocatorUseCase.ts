import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"
import { prisma } from "../../../database/prismaClient"


interface IAuthLocator {
    username: string
    password: string
}


export class AuthLocatorUseCase {
    async execute({ username, password }: IAuthLocator) {

        const locator = await prisma.locator.findFirst({
            where: {
                username
            }
        })


        if (!locator) {
            throw new Error("Login or password incorrect")
        }

        const passwordDoesMatch = await compare(password, locator.password)

        if (!passwordDoesMatch) {
            throw new Error("Login or password incorrect")
        }

        const token = sign({ username }, "51ac18eba35aecab762a32c8de0ab7f1", {
            subject: locator.id,
            expiresIn: "2d"
        })

        return token
    }
}