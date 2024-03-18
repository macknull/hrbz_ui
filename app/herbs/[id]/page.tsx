import HerbCard from './herbs/HerbCard'
import Container from '@mui/material/Container'
import { Herb } from '../../api/herbs/Herb'
import { Metadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getAllHerbs(): Promise<Herb[]> {
  const herbs = await fetch(`${process.env.URL}/api/herbs`)
  return herbs.json()
}


async function getHerbById(id: string): Promise<Herb> {
  const herbs = await fetch(`${process.env.URL}/api/herbs/${id}`)
  return herbs.json()
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const herbs = await getAllHerbs();
 
  return herbs.map((herb) => ({
    id: herb._id,
  }))
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const herb = await getHerbById(params.id);
  const latinName = herb.latin_name;
  return {
    title: `herbme - ${latinName}`,
  }
}

export default async function Herb({
  params,
}: Props) {
  const herb = await getHerbById(params.id);
  return (
    <>
      <Container maxWidth="md">
        <HerbCard herb={herb} />
      </Container>
    </>
  )
}
