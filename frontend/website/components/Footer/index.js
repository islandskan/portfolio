import styles from './Footer.module.css';

export const PageFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_links}>
                {/* Links to LinkedIn and Github */}
            </div>
            <div className={styles.footer_copyright}>
                <small className={styles.copyright}>
                    &copy; {currentYear} Sigridur Eggertsdottir
                </small>
            </div>
        </footer>
    );
};
