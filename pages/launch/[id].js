import styles from "../../styles/launch-page.module.css"
import Link from "next/link"
import Image from "next/image"

const LaunchPage = ({launch}) => {
  
    let nextFlight= launch.flight_number +1;

    let prevFlight= launch.flight_number -1;

    return (
   
        <div className={styles.launch_page_container}>
            <div className={styles.back_button}> <Link href="/">{`<`}</Link> </div>

            <div className={styles.info_top}> <h3> {launch.mission_name}</h3> <div className={styles.info_nav}> <Link href={ `${prevFlight}`}>Prev</Link>/<Link href={`${nextFlight}`}>Next</Link></div> </div>

            <div className={styles.info_desc}><p>{launch.details ? launch.details : "This page will be updated when the data avaible"}</p></div>

            <div className={styles.info_gallery}>
             
{
     launch.links!==undefined ?   launch.links.flickr_images.map((item, i) => (

    <div key={item.flight_number}  className={styles.imgitem}>
  <Image   layout="fill"
alt="spacexlaunchimage"  src={`${item}`}/>
  <br/>
  </div>
    )
    
    ): <div></div>
}
             
            </div>

        </div>
    )
}




  export const getServerSideProps = async (context)=>{
     
      const res =await fetch(`https://api.spacexdata.com/v3/launches/${context.params.id}`)
      const launch = await res.json()
      
      if (context.params.id==="NaN") {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
      return{
          props:{
              launch
          }
         
      }
  }


  export default LaunchPage

