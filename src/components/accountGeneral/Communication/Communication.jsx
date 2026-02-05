import styles from './Communication.module.css';

export default function Communication({ data }) {
    const comm = data?.communication ?? {};
    const left = comm.left ?? [];
    const right = comm.right ?? [];

    return (
        <div className={styles.panel}>
            <div className={styles.top}>
                <input
                    className={styles.search}
                    type="search"
                    placeholder="Search"
                />

                <button className={styles.topBtn} type="button">
                    Filter
                </button>
                <button className={styles.topBtn} type="button">
                    Group
                </button>
            </div>

            <div className={styles.grid}>
                <div className={styles.col}>
                    {left.map((item, idx) => (
                        <article
                            key={`${item.title}-${idx}`}
                            className={`${styles.card} ${styles.cardHighlighted}`}
                        >
                            <div className={styles.cardHeader}>
                                {item.status ? (
                                    <span
                                        className={`${styles.pill} ${
                                            item.status === 'Responded'
                                                ? styles.pillResponded
                                                : styles.pillNew
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                ) : null}

                                <h4 className={styles.cardTitle}>
                                    {item.title}
                                </h4>
                            </div>

                            <div className={styles.meta}>{item.meta}</div>

                            <p className={styles.text}>{item.preview}</p>

                            <div className={styles.footer}>
                                {item.attachments ? (
                                    <span className={styles.attachments}>
                                        <span
                                            className={styles.clip}
                                            aria-hidden="true"
                                        >
                                            📎
                                        </span>
                                        {item.attachments} attachments
                                    </span>
                                ) : (
                                    <span />
                                )}

                                {item.showReply ? (
                                    <button
                                        className={styles.reply}
                                        type="button"
                                    >
                                        Reply
                                    </button>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.col}>
                    {right.map((item, idx) => (
                        <article
                            key={`${item.title}-${idx}`}
                            className={`${styles.card} ${
                                item.compact ? styles.cardCompact : ''
                            }`}
                        >
                            <div className={styles.cardHeader}>
                                {item.status ? (
                                    <span
                                        className={`${styles.pill} ${
                                            item.status === 'Responded'
                                                ? styles.pillResponded
                                                : styles.pillNew
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                ) : null}

                                <h4 className={styles.cardTitle}>
                                    {item.title}
                                </h4>
                            </div>

                            <div className={styles.meta}>{item.meta}</div>

                            <p className={styles.text}>{item.preview}</p>

                            <div className={styles.footer}>
                                {item.attachments ? (
                                    <span className={styles.attachments}>
                                        <span
                                            className={styles.clip}
                                            aria-hidden="true"
                                        >
                                            📎
                                        </span>
                                        {item.attachments} attachments
                                    </span>
                                ) : (
                                    <span />
                                )}

                                {item.showReply ? (
                                    <button
                                        className={styles.reply}
                                        type="button"
                                    >
                                        Reply
                                    </button>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
