import HerbCard from '../../components/herbs/HerbCard'
import { getAllHerbs, getHerbById } from '../../lib/herbs'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Container from '@mui/material/Container'
import Head from 'next/head'

interface HerbParams {
  params: {
    _id: string
  }
}

export default function Herb({
  herb,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const latinName = herb['latin_name']
  return (
    <>
      <Head>
        <title>herbme - {latinName}</title>
      </Head>
      <Container maxWidth="md">
        <HerbCard herb={herb} />
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const herbs = await getAllHerbs()
  const paths = herbs.map((herb) => {
    return {
      params: {
        _id: herb._id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: HerbParams) => {
  const herb = await getHerbById(params._id)
  return {
    props: {
      herb,
    },
  }
}
