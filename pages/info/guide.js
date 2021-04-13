import NavBar from '../../components/NavBar.js'
import styles from '../../styles/Guide.module.css'
import Head from 'next/head'

export default function Guide() {
    return (
        <div>
            <Head>
                <title>Mann Mukti | Guided Care</title>
                <link rel="icon" href="/images/kite-white.jpg" />
            </Head>
            <NavBar></NavBar>
            <h1 className={styles.title}>Guided Care</h1>
            <p className={styles.descrip}>More information is coming soon!</p>
        </div>
    )
}