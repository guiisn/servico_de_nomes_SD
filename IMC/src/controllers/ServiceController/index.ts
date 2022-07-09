import { Request, Response } from "express";

export class ImcController {
    async imc(req: Request, res: Response) {
        const { peso, altura } = req.body

        const imcCalc = (peso / (altura * altura))

        let classificacao = ''

        if (imcCalc < 18.5) {
            classificacao = 'Magreza'
        } else if (imcCalc >= 18.5 && imcCalc < 25) {
            classificacao = 'Normal'
        } else if (imcCalc >= 25 && imcCalc < 30) {
            classificacao = 'Sobrepeso'
        } else if (imcCalc >= 30 && imcCalc < 35) {
            classificacao = 'Obesidade grau I'
        } else if (imcCalc >= 35 && imcCalc < 40) {
            classificacao = 'Obesidade grau II'
        } else {
            classificacao = 'Obesidade grau III'
        }

        return res.json({ imc: `O resultado do cálculo do IMC é: ${imcCalc} e a classificação é: ${classificacao}` })
    }
}