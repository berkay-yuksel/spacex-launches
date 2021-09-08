import Link from "next/link";
import Image from "next/image";
import errorImage from "../public/undefinedholder.jpg";
import styles from "../styles/launch-list.module.css";

const LaunchList = ({ past }) => {
  return (
    <div className={styles.launch_list_container}>
      {past
        .slice(0)
        .reverse()
        .map((item) => (
          <Link key={item.flight_number} href={`/launch/${item.flight_number}`}>
            <div className={styles.launch_item} key={item.flight_number}>
              <Image
                height="270px"
                width="330px"
                src={
                  `${item.links.flickr_images[0]}` === "undefined"
                    ? errorImage
                    : `${item.links.flickr_images[0]}`
                }
              />
              <p>{item.flight_number}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default LaunchList;
