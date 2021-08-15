import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import errorImage from '../public/undefinedholder.jpg'

export default function Home({past,next}) {

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div>

<div>  {next.flight_number} <br/> {next.mission_name} <br/>{next.launch_date_local.split("T")[0].split('-').reverse().join('-')}  <br/> {next.rocket.rocket_name}</div>
  <hr/>
</div>
      <main className={styles.launch_container} >

{      past.slice(0).reverse().map(item=>(

<Link href={`/launch/${item.flight_number}`} >   
<div className={styles.launch_item}  key={item.flight_number}>
  <Image  height="270px" width="330px" src={`${item.links.flickr_images[0]}`==="undefined" ? errorImage : `${item.links.flickr_images[0]}` }  /> 
<p>{item.flight_number}</p>

 </div>
  </Link> 

      ))
    }
      </main>

  
    </div>
  )
}


// getting launches
export async function getServerSideProps() {
  const res = await fetch(`https://api.spacexdata.com/v3/launches/past`)
  const res2= await fetch(`https://api.spacexdata.com/v3/launches/next`)
  const past = await res.json()
  const next=await res2.json()
  return { props: { past,next } }
}