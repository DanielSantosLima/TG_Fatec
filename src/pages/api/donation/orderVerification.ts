import { Prisma, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

const  orderVerification = async ( req:NextApiRequest, res:NextApiResponse) => {
  const { body } = req
  console.log(body);
  
  const { nome, telefone, celular } = body.donationRequestToCreate
  try {
    const dbReturn = await prisma.pedidosDoacaoEmAberto.findMany({
      where: {
        OR:[
          {
            nome: nome,
            telefone: telefone
          },
          {
            nome: nome,
            celular: celular
          }
        ]
      }
    })
    return res.send(dbReturn)
  } catch (error) {
    throw error
  }finally {
    await prisma.$disconnect()
  }
  
}

export default orderVerification

// import { PrismaClient } from "@prisma/client"

// let prisma

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }

//   prisma = global.prisma
// }

// export default prisma