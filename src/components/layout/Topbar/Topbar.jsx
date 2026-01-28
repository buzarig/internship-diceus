import styles from './Topbar.module.css';
import TopNav from '../TopNav/TopNav.jsx';

export default function Topbar({ title }) {
    return (
        <header className={styles.topbar}>
            <div className={styles.row}>
                <div>
                    <div className={styles.big}>
                        Hi Arthur, welcome! You have 12 open tasks.
                    </div>
                    <div className={styles.small}>{title}</div>
                </div>

                <div className={styles.actions}>
                    <input className={styles.search} placeholder="Search" />
                    <div className={styles.avatar}>AR</div>
                </div>
            </div>

            <TopNav />
        </header>
    );
}
