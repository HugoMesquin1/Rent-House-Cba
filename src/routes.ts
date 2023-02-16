import { Router } from "express"
import { CreateTenantController } from "./modules/tenant/createTenant/CreateTenantController"
import { CreateLocatorController } from "./modules/locator/createLocator/CreateLocatorController"
import { AuthLocatorController } from "./modules/Auths/AuthLocator/AuthLocatorController"
import { AuthTenantController } from "./modules/Auths/AuthTenant/AuthTenantController"
import { CreateHouseController } from "./modules/house/CreateHouseController"


import { EnsureAuthenticateTenant } from "./middlewares/EnsureAuthenticateTenant"



const routes = Router()

const createHouseController = new CreateHouseController()

const createLocatorController = new CreateLocatorController()
const createTenantController = new CreateTenantController()

const authLocatorController = new AuthLocatorController()
const authTenantController = new AuthTenantController()



routes.post("/auth/locator", authLocatorController.handle)
routes.post("/auth/tenant", authTenantController.handle)

routes.post("/locator/create", createLocatorController.handle)
routes.post("/tenant/create", createTenantController.handle)

routes.post("/house/create", EnsureAuthenticateTenant, createHouseController.handle)



export { routes }