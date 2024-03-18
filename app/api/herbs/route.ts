import type { NextApiRequest, NextApiResponse } from 'next'
import { Herb } from './Herb'

type ResponseError = {
  message: string;
};
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Herb | ResponseError>
) {
  return await fetch('http://localhost:3000/herbs')
}

export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}