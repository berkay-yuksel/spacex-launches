import Head from "next/head";
import LaunchList from "../components/launch-list";
import LaunchHeader from "../components/launch-header";


export default function Home({ past, next }) {
  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="Berkay Yüksel NextJs SpaceX Launches Project" />
        <link rel="icon" href="/favicon.ico" />
  
      </Head>
      <div>
        <LaunchHeader next={next} />
        <hr/>
        <LaunchList past={past} />
      </div>
    </div>
  );
}

// getting next and past launches
export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v3/launches/past`);
  const res2 = await fetch(`https://api.spacexdata.com/v3/launches/next`);
  const past = await res.json();
  const next = await res2.json();
  return { props: { past, next } };
}
