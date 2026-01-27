import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const { pathname } = useLocation();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>Intern App</div>

            <nav className={styles.nav}>
                <Link to="/" className={pathname === '/' ? styles.active : ''}>
                    Dashboard
                </Link>

                <Link
                    to="/account/a1"
                    className={
                        pathname.startsWith('/account') ? styles.active : ''
                    }
                >
                    Account
                </Link>
            </nav>
        </aside>
    );
}
