import styles from "../styles/launch-header.module.css";
import logo from "../public/logo.png"
import Link from "next/link";
import Image from 'next/image'
const LaunchHeader=({next})=> {
    return (
        <div className={styles.launch_header_container}>
<div className={styles.logo}>
<Link href='/' >
<div><Image src={logo} alt="logo" rel="preload" /></div>
</Link>
</div>
<div className={styles.info_box}>
<span>NEXT LAUNCH</span>
<table>
<tbody>
<tr>
    <th>Flight Number</th>
    <th>Mission</th>
    <th>Rocket Number</th>
    <th>Launch Date</th>
  </tr>
  <tr>
    <td>{next.flight_number}</td>
    <td> {next.mission_name}</td>
    <td>{next.rocket.rocket_name}</td>
     <td>{next.launch_date_local.split("T")[0]}</td>
  </tr>
</tbody>
</table>
</div>

        </div>
    )
}

export default LaunchHeader


// <br/> <br/>  <br/> 