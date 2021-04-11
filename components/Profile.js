import Image from 'next/image'
import styles from "../styles/Profile.module.css"

export default function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className={styles["profile-pic"]}>
        <Image
          src={props.image}
          alt={props.name + "'s profile picture"}
          width="250vw"
          height="250vw"
        />
      </div>
    
      <div className={styles.name}>{props.name}</div>
      <div className={styles.position}>{props.position}</div>
      <div className={styles.bio}>{props.bio}</div>
    </div>
  );
}