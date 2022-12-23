import { Navbar } from './Navbar';
import { MenuContent } from './MenuContent';
import styles from './Menubar.module.css';

export const Menubar = () => {
    return (
        <div className={styles.menubar}>
            <Navbar />
            <MenuContent />
        </div>
    );
};
