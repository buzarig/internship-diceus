import styles from './Card.module.css';

export default function Card({ title, right, children, variant = 'light' }) {
    return (
        <div
            className={`${styles.card} ${variant === 'dark' ? styles.dark : ''}`}
        >
            {(title || right) && (
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.right}>{right}</div>
                </div>
            )}
            <div className={styles.body}>{children}</div>
        </div>
    );
}
