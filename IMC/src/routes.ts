import { Router } from "express";
import { ImcController } from "./controllers/ServiceController";

const routes = Router();

routes.post('/', new ImcController().imc)

export default routes;