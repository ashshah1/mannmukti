import styles from "../styles/Collaborations.module.css"
import Image from 'next/image';

export default function Collaborator(props) {

    return (
        <div>
            <div className={styles.project}>{props.project}</div>
            <div className={styles.descrip}>{props.description}</div>
            <div className={styles.img}>
                <Image
                    src={props.image}
                    alt={"image of the team at " + props.name}
                    width="300vw"
                    height="200vw"
                />
            </div>
            <div className={styles.caption}>{props.caption}</div>
        </div>
    );
}