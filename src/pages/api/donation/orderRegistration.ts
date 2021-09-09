import { Prisma, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const orderRegistration = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req
    console.log(body.donationRequestToCreate);
    
    const { nome, telefone, celular, descricao, ativo } = body.donationRequestToCreate
    try {
        const dbReturn = await prisma.pedidosDoacaoEmAberto.create({
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
        return res.send(dbReturn)
    } catch (error) {
        throw error
    } finally {
        await prisma.$disconnect()
    }


    
}

export default orderRegistration