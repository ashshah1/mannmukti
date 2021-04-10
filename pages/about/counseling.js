import NavBar from '../../components/NavBar.js'
import styles from '../../styles/Counseling.module.css'


export default function Counseling() {
    return (
        <div>
            <NavBar></NavBar>
            <h1 className={styles.title}>Peer Counseling</h1>
            <p className={styles.descrip}>More information is coming soon!</p>
        </div>
    )
}