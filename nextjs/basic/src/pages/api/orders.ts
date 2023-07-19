// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nokori from '@nokori/js-sdk'
const apiKey = process.env.NOKORI_API_KEY
if (!apiKey) {
  throw new Error("nokori API Key not found");
  
}
const nk = new nokori(apiKey);

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

  /**
  *
  * Nokori Hubs Integration - Function call baked in to the handler.
  *
  **/
  const {data: orders, error} = await nk.query.execute({
    queryId: '{{YOUR_QUERY_ID}}'
  })

  res.status(200).json({ orders, error})
}
