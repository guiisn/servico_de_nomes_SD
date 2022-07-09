import { Request, Response } from "express";
import { apiIMC } from "../../apis/IMC";
import { apiValidaCPF } from "../../apis/validaCPF";

export class ServiceController {
    async getService(req: Request, res: Response) {
        const service = Object.keys(req.body)
        const param = req.body[service[0]]


        if (!service) {
            return res.status(404).json({ error: 'Serviço não informado, informe algum serviço. Ex: valida_cpf ou imc.' })
        }

        if (service[0] !== 'valida_cpf' && service[0] !== 'imc') {
            return res.status(404).json({ error: 'O serviço informado não foi encontrado. Informe algum serviço. Ex: valida_cpf ou imc.' })
        }

        if (service[0] === 'valida_cpf') {
            const response = await apiValidaCPF.post('/', { cpf: param })
            return res.json(response.data)
        }

        if (service[0] === 'imc') {
            const response = await apiIMC.post('/', param)
            return res.json(response.data)
        }
    }
}