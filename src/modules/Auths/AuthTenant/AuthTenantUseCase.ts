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


        console.log(tenant)

        if (!tenant) {
            throw new Error("Login or password incorrect")
        }

        console.log(console.log(tenant))

        const passwordDoesMatch = await compare(password, tenant.password)

        if (!passwordDoesMatch) {
            throw new Error("Login or password incorrect")
        }

        console.log(tenant)

        const token = sign({ username }, "51ac18eba35aecab762a32c8de0ab7f5", {
            subject: tenant.id,
            expiresIn: "2d"
        })

        console.log(tenant)

        return token
    }
}