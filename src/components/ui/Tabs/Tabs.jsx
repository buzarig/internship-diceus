import styles from './Tabs.module.css';

export default function Tabs({ items, value, onChange }) {
    return (
        <div className={styles.tabs} role="tablist">
            {items.map((t) => (
                <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={t === value}
                    className={`${styles.tab} ${t === value ? styles.active : ''}`}
                    onClick={() => onChange(t)}
                >
                    {t}
                </button>
            ))}
        </div>
    );
}
