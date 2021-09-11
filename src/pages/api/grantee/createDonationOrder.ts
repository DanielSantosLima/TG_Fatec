import { NextApiRequest, NextApiResponse } from 'next'
import defaultPrisma from '../../../../prismaClientConfig';


const createDonationOrder = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req
    const { nome, telefone, celular, descricao, ativo } = body.donationRequestToCreate

    try {
        if(!nome){
            throw new Error("Campo nome não pode estar vazio.") 
        }
        if(!celular && !telefone){
            throw new Error("Um dos campos telefone/celular precisa ser informado.") 
        }
        if(!descricao){
            throw new Error("Campo descrição não pode estar vazio.") 
        }

        const dbReturn = await defaultPrisma.pedidosDoacaoEmAberto.create({
            data: {
                nome: nome,
                telefone: telefone,
                celular: celular,
                descricao: descricao,
                ativo: ativo
            },
            select: {
                id: true
            }
        })
        return res.status(200).send({
            success: true,
            message: 'Pedido criado com sucesso.',
            data: dbReturn
        })
    } catch (error) {
        res.status(200).send({
            success: false,
            message: error.message
        })
    } finally {
        await defaultPrisma.$disconnect()
    }
}

export default createDonationOrder