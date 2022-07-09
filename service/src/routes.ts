import { Router } from "express";
import { ServiceController } from "./controllers/ServiceController";

const routes =  Router();

routes.post('/', new ServiceController().getService)

export default routes;