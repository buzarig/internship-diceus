import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.css';

export default function TopNav() {
    return (
        <nav className={styles.nav}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? `${styles.pill} ${styles.active}` : styles.pill
                }
                end
            >
                Dashboard
            </NavLink>

            <NavLink
                to="/accounts"
                className={({ isActive }) =>
                    isActive ? `${styles.pill} ${styles.active}` : styles.pill
                }
            >
                Accounts
            </NavLink>
        </nav>
    );
}
