import { Router } from "express";
import { ValidaController } from "./controllers/ServiceController";

const routes = Router();

routes.post('/', new ValidaController().valida)

export default routes;