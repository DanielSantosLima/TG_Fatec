import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../../prismaClientConfig';

const deleteDonationOrderById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query, method } = req

    if(method === "DELETE"){
        try {
            const response = await defaultPrisma.$queryRaw(`
                update public."PedidosDoacaoEmAberto" set ativo = false where id = '${query.id}';
            `)

            return res.status(200).send({
                success: true,
                message: "Pedido de doação excluído/desativado"
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
        return console.log("Deleção de elementos aceita apenas requisições com o método DELETE.");
    }
}

export default deleteDonationOrderById