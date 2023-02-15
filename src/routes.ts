import { Router } from "express"
import { CreateTenantController } from "./modules/tenant/createTenant/createTenantController"



const routes = Router()


const createTenantController = new CreateTenantController()




routes.post("/tenant/create", createTenantController.handle)



export { routes }