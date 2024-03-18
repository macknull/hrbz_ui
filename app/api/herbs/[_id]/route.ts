import type { NextApiRequest, NextApiResponse } from 'next'
import { Herb } from '../Herb'

type HerbParams = {
  params: {
    _id: string
  }
}
type ResponseError = {
  message: string;
};

// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug // 'a', 'b', or 'c'
// }

export async function GET(
  req: NextApiRequest,
  // res: NextApiResponse<Herb | ResponseError>,
  { params }: { params: { _id: string } }
) {
  console.log("api/herbs/[_id] GET params: ", params)
  const { _id } = params;
  
  return await fetch(`http://localhost:3000/herbs/${_id}`)
    // ? res.status(200).json(person)
    // : res.status(404).json({ message: `User with id: ${id} not found.` });
}

export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}