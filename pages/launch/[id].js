

function LaunchPage({ launch }) {
    console.log(launch)
    return <>
    <div>{launch.flight_number}</div>
    <div> {launch.details}</div>
    </>
  }
  



  export const getServerSideProps = async (context)=>{
   
      const res =await   fetch(`https://api.spacexdata.com/v3/launches/${context.params.id}`)
      const launch = await res.json()

      return{
          props:{
              launch
          }
      }
  }


  export default LaunchPage

