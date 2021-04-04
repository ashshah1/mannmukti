import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();


    // by default all classes are set to dark theme since more pages call for that and I'm not in the mood to write about the world's longest if check to compare against all those path names 

    let navClass = styles["navbar-dark"];
    let dropBtnClass = styles["dropbtn-dark"];
    let dropdownClass = styles["dropdown-content-dark"];

    let location = router.pathname;

    if (location === "/" || location === "/about/collaborations" || location === "/info/help" || location === "/reach/contact") {
        navClass = styles.navbar;
        dropBtnClass = styles.dropbtn;
        dropdownClass = styles["dropdown-content"];
    }

    return (
        <div className={navClass}>
            <div id={styles.left}>
                <Link href="/">
                    <a>Mann Mukti</a>
                </Link>
            </div>
            <div id={styles.right} className={styles.dropdown}>
                <div className={styles["drop-container"]}>
                    <button className={dropBtnClass}>What We Do</button>
                    <div className={dropdownClass}>
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
                    <button className={dropBtnClass}>Info</button>
                <div id={styles.left}>
                    <Link href="/">
                        <a>Mann Mukti</a>
                    </Link>
                </div>
                <div id={styles.right} className={styles.dropdown}>
                    <div className={styles["drop-container"]}>
                        <button className={dropBtnClass}>What We Do</button>
                        <div className={dropdownClass}>
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
                        <button className={dropBtnClass}>Info</button>

                        <div className={dropdownClass}>
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
                        <button className={dropBtnClass}>The Issue</button>

                        <div className={dropdownClass}>
                            <Link href="/issue/issue">
                                <a>At a Glance</a>
                            </Link>
                            <Link href="/issue/blog">
                                <a>Blog</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles["drop-container"]}>
                        <button className={dropBtnClass}>Contact</button>

                        <div className={dropdownClass}>
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