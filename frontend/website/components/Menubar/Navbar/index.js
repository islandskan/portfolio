import styles from './Navbar.module.css';
export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h1 className={styles.logo_name}>Sigridur Eggertsdottir</h1>
            </div>

            <ul className={styles.nav_menu}>
                <li>Info</li>
                <li>Work</li>
                <li>Blog</li>
            </ul>
        </nav>
    );
};
