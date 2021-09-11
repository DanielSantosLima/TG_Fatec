import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../prismaClientConfig';

const verifyUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req
    const { name, password } = body.userToVerify
    if (method === 'POST') {
        try {
            if (!name)
                throw new Error("Nome do usuário não pode estar vazio.")
            if (!password)
                throw new Error("Senha do usuário não pode estar vazio.")
            const data = await defaultPrisma.$queryRaw(`
                select * from public.usuario where email = '${name}' and password = '${password}'
            `)
            if(data.length < 1){
                return res.status(200).send({
                    success: false,
                    message: 'Usuário não encontrado.'
                })
            }
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

export default verifyUser