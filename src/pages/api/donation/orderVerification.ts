import defaultPrisma from '../../../../prismaClientConfig';
import { NextApiRequest, NextApiResponse } from 'next'

const  orderVerification = async ( req:NextApiRequest, res:NextApiResponse) => {
  const { body } = req
  
  const { nome, telefone, celular } = body.donationRequestToCreate
  try {
    const dbReturn = await defaultPrisma.$queryRaw(
      `select * from public."PedidosDoacaoEmAberto" pdea 
        where (nome = '${nome}' and telefone = '${telefone}') 
      or 
        (nome = '${nome}' and celular = '${celular}')`
      )
    return res.send(dbReturn)
  } catch (error) {
    throw error
  }finally {
    await defaultPrisma.$disconnect()
  }
}

export default orderVerification

