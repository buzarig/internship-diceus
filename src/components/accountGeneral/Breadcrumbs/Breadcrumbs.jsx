import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({ items = [] }) {
    return (
        <div className={styles.breadcrumbs}>
            {items.map((t, idx) => (
                <span key={t}>
                    {idx > 0 ? <span className={styles.sep}>//</span> : null}
                    <span
                        className={
                            idx === items.length - 1
                                ? styles.active
                                : styles.item
                        }
                    >
                        {t}
                    </span>
                </span>
            ))}
        </div>
    );
}
