import styles from './AccountStatusCompliance.module.css';

export default function AccountStatusCompliance({ data }) {
    const steps = data?.steps ?? [];
    const complianceItems = data?.complianceItems ?? [];

    return (
        <div className={styles.grid}>
            {/* LEFT */}
            <div className={styles.card}>
                <div className={styles.header}>
                    <h3 className={styles.title}>Account Status</h3>
                </div>

                <div className={styles.inner}>
                    <div className={styles.stepper} role="list">
                        <div
                            className={styles.stepperLine}
                            aria-hidden="true"
                        />

                        {steps.map((s, idx) => {
                            const isDone = s.state === 'done';
                            const isNext = s.state === 'next';
                            const isLast = idx === steps.length - 1;

                            return (
                                <div
                                    className={styles.step}
                                    role="listitem"
                                    key={`${s.label}-${idx}`}
                                >
                                    <div
                                        className={[
                                            styles.dot,
                                            isDone ? styles.dotDone : '',
                                            isNext ? styles.dotNext : '',
                                            isLast ? styles.dotLast : '',
                                        ].join(' ')}
                                        aria-hidden="true"
                                    >
                                        {isDone || isLast ? (
                                            <span className={styles.check}>
                                                ✓
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className={styles.stepLabel}>
                                        {s.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className={styles.card}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        Compliance &amp; Documentation
                    </h3>

                    <button className={styles.historyLink} type="button">
                        See history →
                    </button>
                </div>

                <div className={styles.inner}>
                    <div className={styles.complianceGrid}>
                        {complianceItems.map((t) => (
                            <div className={styles.complianceItem} key={t}>
                                <span className={styles.ok} aria-hidden="true">
                                    ✓
                                </span>
                                <span className={styles.complianceText}>
                                    {t}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
