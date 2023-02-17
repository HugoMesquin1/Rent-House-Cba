import { Router } from "express"
import { CreateTenantController } from "./modules/tenant/createTenant/CreateTenantController"
import { CreateLocatorController } from "./modules/locator/createLocator/CreateLocatorController"
import { AuthLocatorController } from "./modules/Auths/AuthLocator/AuthLocatorController"
import { AuthTenantController } from "./modules/Auths/AuthTenant/AuthTenantController"
import { CreateHouseController } from "./modules/house/createHouse/CreateHouseController"
import { DeleteHouseController } from "./modules/house/deleteHouse/deleteHouseController"
import { SearchAllController } from "./modules/researches/searchAll/searchAllController"
import { SearchByZipController } from "./modules/researches/searchByZip/searchByZipController"

import { EnsureAuthenticateTenant } from "./middlewares/EnsureAuthenticateTenant"



const routes = Router()

const createHouseController = new CreateHouseController()

const searchByZipController = new SearchByZipController()
const createLocatorController = new CreateLocatorController()
const createTenantController = new CreateTenantController()
const deleteHouseController = new DeleteHouseController()
const searchAllController = new SearchAllController()

const authLocatorController = new AuthLocatorController()
const authTenantController = new AuthTenantController()



routes.post("/auth/locator", authLocatorController.handle)
routes.post("/auth/tenant", authTenantController.handle)

routes.post("/locator/create", createLocatorController.handle)
routes.post("/tenant/create", createTenantController.handle)

routes.delete("/tenant/house/:id", EnsureAuthenticateTenant, deleteHouseController.handle)

routes.post("/house/create", EnsureAuthenticateTenant, createHouseController.handle)

routes.get("/search/all", searchAllController.handle)
routes.get("/search/zip/:zip", searchByZipController.handle)


export { routes }