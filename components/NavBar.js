import Link from 'next/link'
import styles from '../styles/NavBar.module.css'


export default function NavBar() {
    return (
        <div className={styles.navbar}>

            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>What We Do
                </button>
                <div>
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
                <button className={styles.dropbtn}>Info
                </button>
                <div>
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
                <button className={styles.dropbtn}>The Issue
                </button>
                <div>
                <div className={styles["dropdown-content"]}>
                    <Link href="/issue/issue">
                        <a>At a Glance</a>
                    </Link>
                    <Link href="/issue/blog">
                        <a>Blog</a>
                    </Link>
                </div>
                </div>
                <button className={styles.dropbtn}>Contact
                </button>
                <div>
                <div className={styles["dropdown-content"]}>
                    <Link href="/contact/Instagram">
                        <a>Social Media</a>
                    </Link>
                    <Link href="/contact/contact">
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