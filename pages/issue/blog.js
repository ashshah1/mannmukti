import NavBar from '../../components/NavBar.js'
import styles from '../../styles/Blog.module.css'
import Head from 'next/head'

export default function Blog() {
    return (
        <div className={styles["full-page"]}>
            <Head>
                <title>Mann Mukti | Blog</title>
                <link rel="icon" href="/images/kite-white.jpg" />
            </Head>
            <NavBar></NavBar>
        </div>
        
    )
}