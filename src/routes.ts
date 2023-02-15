import { Router } from "express"
import { CreateTenantController } from "./modules/tenant/createTenant/CreateTenantController"
import { CreateLocatorController } from "./modules/locator/createLocator/CreateLocatorController"
import { AuthLocatorController } from "./modules/Auths/AuthLocator/AuthLocatorController"

import { EnsureAutheticateLocator } from "./middlewares/EnsureAutheticateLocator"
import { EnsureAutheticateTenant } from "./middlewares/EnsureAutheticateTenant"



const routes = Router()


const createLocatorController = new CreateLocatorController()
const createTenantController = new CreateTenantController()

const authLocatorController = new AuthLocatorController()



routes.post("/auth/locator", authLocatorController.handle)

routes.post("/locator/create", createLocatorController.handle)
routes.post("/tenant/create", createTenantController.handle)



export { routes }