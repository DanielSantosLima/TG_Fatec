import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../../prismaClientConfig';

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req

    if (method === "POST") {
        try {
            if (!body.tipoUsuario)
                throw new Error("Tipo de usuário não pode estar vazio.")
            if (!body.nome)
                throw new Error("Nome do usuário não pode estar vazio.")
            if (!body.cpf)
                throw new Error("CPF do usuário não pode estar vazio.")
            if (!body.telefone)
                throw new Error("Telefone de usuário não pode estar vazio.")
            if (!body.tipoTelefoneId)
                throw new Error("Tipo de Telefone não pode estar vazio.")

            
        } catch (error) {
            return res.status(200).send({
                success: false,
                message: error.message
            })
        } finally {
            await defaultPrisma.$disconnect()
        }
    } else {
        return res.status(200).send({
            success: false,
            message: "Esse tipo de requisição aceita apenas o método GET"
        })
    }
}

export default createUser