import { Router } from "express"
import { CreateTenantController } from "./modules/tenant/createTenant/CreateTenantController"
import { CreateLocatorController } from "./modules/locator/createLocator/CreateLocatorController"



const routes = Router()


const createLocatorController = new CreateLocatorController()
const createTenantController = new CreateTenantController()



routes.post("/locator/create", createLocatorController.handle)
routes.post("/tenant/create", createTenantController.handle)



export { routes }