import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../../prismaClientConfig';


const getOrderById = async(req: NextApiRequest, res: NextApiResponse) => {
    const { query, method } = req

    let message:string = ''

    if(method === 'GET'){
        try {
            const data = await defaultPrisma.$queryRaw(
                `select * from public."PedidosDoacaoEmAberto" pdea 
                    where id = '${query.id}'
                `
                )
            if(data.length < 1){
                message = "Nenhum pedido encontrado"
            }else {
                message = "Exibindo pedido de doação selecionado."
            }
            console.log(data);
            
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
        return res.send('Esse endpoint aceita apenas requisições que usem o método GET')
    }
    
    
}

export default getOrderById