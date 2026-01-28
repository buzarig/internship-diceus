import styles from './Card.module.css';

export default function Card({ title, right, children }) {
    return (
        <section className={styles.card}>
            {(title || right) && (
                <div className={styles.header}>
                    {title ? (
                        <h2 className={styles.title}>{title}</h2>
                    ) : (
                        <div />
                    )}
                    {right ? <div className={styles.right}>{right}</div> : null}
                </div>
            )}
            {children}
        </section>
    );
}
