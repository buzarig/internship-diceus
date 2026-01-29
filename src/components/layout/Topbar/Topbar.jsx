import styles from './Topbar.module.css';

export default function Topbar() {
    return (
        <header className={styles.topbar}>
            <div className={styles.inner}>
                <div className={styles.title}>
                    Hi Arthur, welcome! You have{' '}
                    <span className={styles.em}>8</span> open tasks.
                </div>

                <div className={styles.right}>
                    <input className={styles.search} placeholder="Search" />
                    <div className={styles.avatar}>AR</div>
                </div>
            </div>
        </header>
    );
}
