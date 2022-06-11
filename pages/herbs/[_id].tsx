import HerbCard from "../../components/herbs/HerbCard";
import { getAllHerbs, getHerbById } from "../../lib/herbs";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'

interface HerbParams {
  params: {
    // 'latinName': string,
    '_id': string,
  }
}

export default function Herb({ herb }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HerbCard herb={herb} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const herbs = await getAllHerbs();
  const paths = herbs.map(
    herb => {
      return {
        params: {
          // 'latinName': herb.latin_name.toLowerCase().replaceAll(' ', '-'),
          '_id': herb._id
        }
      }
    }
  );
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: HerbParams) => {
  const herb = await getHerbById(params._id)
  return {
    props: {
      herb,
    },
  }
}