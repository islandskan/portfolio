import Link from 'next/link';
import styles from './Navbar.module.css';
export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h1 className={styles.logo_name}>Sigridur Eggertsdottir</h1>
            </div>

            <ul className={styles.nav_menu}>
                <li>
                    <Link href='/info'>Info</Link>
                </li>
                <li>
                    <Link href='/work'>Work</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
            </ul>
        </nav>
    );
};
