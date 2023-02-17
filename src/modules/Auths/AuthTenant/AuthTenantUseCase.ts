import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"
import { prisma } from "../../../database/prismaClient"


interface IAuthTenant {
    username: string
    password: string
}


export class AuthTenantUseCase {
    async execute({ username, password }: IAuthTenant) {

        const tenant = await prisma.tenant.findFirst({
            where: {
                username
            }
        })

        if (!tenant) {
            throw new Error("Login or password incorrect")
        }

        const passwordDoesMatch = await compare(password, tenant.password)

        if (!passwordDoesMatch) {
            throw new Error("Login or password incorrect")
        }

        const token = sign({ username }, "167db8c94a5fb61b3126b1d064c75abb", {
            subject: tenant.id,
            expiresIn: "2d"
        })


        return token
    }

}

