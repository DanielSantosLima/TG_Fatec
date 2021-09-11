import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../prismaClientConfig';


const listActiveDonationOrders = async (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req
    let message:string = ''
    if(method === "GET"){
        try {
            const data = await defaultPrisma.$queryRaw(`
                select * from public."PedidosDoacaoEmAberto" pdea where ativo = true;
            `)
            if(data.length < 1){
                message = "Nenhum registro encontrado"
            }else {
                message = "Exibindo resultados."
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
        return res.send("Essa requisição aceita apenas o método GET.")
    }
}

export default listActiveDonationOrders