import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();


    console.log(router.pathname);

    const styling = {
        color: router.pathname === "/info/resources" ? '#A77B77' : 'white'
    }


    return (
        <div className={styles.navbar} style={styling}>

            <div className={styles.dropdown}>
            <div className={styles["drop-container"]}>
                <button className={styles.dropbtn} style={styling}>What We Do
                </button>
                
                <div className={styles["dropdown-content"]}>
                    <Link href="/about/collaborations">
                        <a>Collaborations</a>
                    </Link>
                    <Link href="/about/committees">
                        <a>Committees</a>
                    </Link>
                    <Link href="/about/counseling">
                        <a>Peer Counseling</a>
                    </Link>
                    <Link href="/about/team">
                        <a>About Us</a>
                    </Link>
                </div>
                </div>
                <div className={styles["drop-container"]}>
                <button className={styles.dropbtn} style={styling}>Info
                </button>
                
                <div className={styles["dropdown-content"]}>
                    <Link href="/info/resources">
                        <a>Resources</a>
                    </Link>
                    <Link href="/info/guide">
                        <a>Guided Care</a>
                    </Link>
                    <Link href="/info/help">
                        <a>Help</a>
                    </Link>
                    <Link href="/info/reports">
                        <a>Data Reports</a>
                    </Link>
                </div>
                </div>
                <div className={styles["drop-container"]}>
                <button className={styles.dropbtn} style={styling}>The Issue
                </button>
                
                <div className={styles["dropdown-content"]}>
                    <Link href="/issue/issue">
                        <a>At a Glance</a>
                    </Link>
                    <Link href="/issue/blog">
                        <a>Blog</a>
                    </Link>
                </div>
                </div>
                <div className={styles["drop-container"]}>
                <button className={styles.dropbtn} style={styling}>Contact
                </button>
               
                <div className={styles["dropdown-content"]}>
                    <Link href="/reach/instagram">
                        <a>Social Media</a>
                    </Link>
                    <Link href="/reach/contact">
                        <a>Contact Us</a>
                    </Link>
                </div>
                </div>
                <Link href="/apply">
                    <a>Join Us</a>
                </Link>
            </div>
        </div>

    )

}