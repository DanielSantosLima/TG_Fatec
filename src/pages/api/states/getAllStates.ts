import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../prismaClientConfig';


const getAllStates = async (req:NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    if(method === 'GET'){
        try {
            const data = await defaultPrisma.$queryRaw(`select * from public.estados`)
            let message: string = ''
            if(data.length < 1){
                message = 'Nenhum registro encontrado.'
            }else {
                message = 'Exibindo todos os estados.'
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

export default getAllStates