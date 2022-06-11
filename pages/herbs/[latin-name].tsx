import HerbCard from "../../components/herbs/HerbCard";

export default function Herb() {
  return <HerbCard title='chamomile test title' />;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}