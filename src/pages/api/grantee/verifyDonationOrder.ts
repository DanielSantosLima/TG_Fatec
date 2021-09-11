import defaultPrisma from '../../../../prismaClientConfig';
import { NextApiRequest, NextApiResponse } from 'next'

const  verifyDonationOrder = async ( req:NextApiRequest, res:NextApiResponse) => {
  const { body } = req
  
  const { nome, telefone, celular } = body.donationRequestToCreate
  try {
    const dbReturn = await defaultPrisma.$queryRaw(
      `select * from public."PedidosDoacaoEmAberto" pdea 
        where (nome = '${nome}' and telefone = '${telefone}') 
      or 
        (nome = '${nome}' and celular = '${celular}')`
      )
      
    let message: string = ''
    if(dbReturn.length < 1){
      message = "Nenhum pedido de doação encontrado com esse conjunto de nome e telefone"
    }else {
      message = "Já existe um pedido de doação em seu nome. Em breve a Olhos do Bem entrará em contato com você."
    }
    return res.status(200).send({
      success: true,
      message,
      data: dbReturn
    })
  } catch (error) {
    return res.status(200).send({
      success: false,
      message: error.message
    })
  }finally {
    await defaultPrisma.$disconnect()
  }
}

export default verifyDonationOrder

