import NavBar from '../../components/NavBar.js'
import styles from '../../styles/Counseling.module.css'
import Head from 'next/head'

export default function Counseling() {
    return (
        <div>
            <Head>
                <title>Mann Mukti | Counseling</title>
                <link rel="icon" href="/images/kite-white.jpg" />
            </Head>
            <NavBar></NavBar>
            <h1 className={styles.title}>Peer Counseling</h1>
            <p className={styles.descrip}>More information is coming soon!</p>
        </div>
    )
}