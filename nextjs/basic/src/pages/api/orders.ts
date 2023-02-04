// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import LolaDB from '@loladb/sdk-js'
const apiKey = process.env.LOLA_API_KEY
if (!apiKey) {
  throw new Error("lolaDB API Key not found");
  
}
const lola = new LolaDB(apiKey);

type OrderItem = {
  orderId: string,
  createdAt: string,
  productName: string,
  quantity: string,
  customerId: string,
}

type Orders = {
  orders?: OrderItem[]
  error?: any 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Orders>
) {
  const {data: orders, error} = await lola.query.execute({
    queryId: 'lola.q.MKCy3BBzVl2Slj1h0Td'
  })

  res.status(200).json({ orders, error})
}
