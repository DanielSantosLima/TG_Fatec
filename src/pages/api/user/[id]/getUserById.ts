import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../../prismaClientConfig';

const getUserById = async (req:NextApiRequest, res: NextApiResponse) => {
    const { query, method } = req
    if(method === 'GET'){
        try {
        if(!query.id)
            throw new Error("Id do usuário não pode estar vazio.")
        const data = await defaultPrisma.$queryRaw(`select * from public.usuario where id = '${query.id}'`)
        let message: string = ''
            if(data.length < 1){
                message = 'Nenhum registro encontrado.'
            }else {
                message = 'Exibindo usuário selecionado'
            }
            return res.status(200).send({
                success: true,
                message,
                data
            })
    } catch (error) {
        return res.status(200).send({
            success: false,
            message: error.message
        })
    }finally {
        await defaultPrisma.$disconnect()
    }
    }else {
        return res.status(200).send({
            success: true,
            message: "Esse tipo de requisição aceita apenas o método GET"
        })
    }
}

export default getUserById