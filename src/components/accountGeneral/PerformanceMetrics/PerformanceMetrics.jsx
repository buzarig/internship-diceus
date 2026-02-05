import Card from '../../ui/Card/Card.jsx';
import styles from './PerformanceMetrics.module.css';

export default function PerformanceMetrics({ data }) {
    const m = data.defaultMetrics;

    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>Performance Metrics</h2>

            <div className={styles.grid}>
                <Card variant="dark" title={null}>
                    <div className={styles.cardPad}>
                        <div className={styles.cardTop}>
                            <div className={styles.title}>
                                {m.winnability.title}
                            </div>
                            <Dots count={m.winnability.dots} />
                        </div>

                        <div className={styles.bigText}>
                            {m.winnability.scoreLabel}
                        </div>

                        <button className={styles.link} type="button">
                            {m.winnability.link}
                        </button>
                    </div>
                </Card>

                <Card variant="dark" title={null}>
                    <div className={styles.cardPad}>
                        <div className={styles.title}>{m.lossRatio.title}</div>

                        <div className={styles.valueRow}>
                            <div className={styles.value}>
                                {m.lossRatio.value}
                            </div>
                            <div className={styles.muted}>
                                {m.lossRatio.sub}
                            </div>
                        </div>

                        <button className={styles.link} type="button">
                            {m.lossRatio.link}
                        </button>
                    </div>
                </Card>

                <Card variant="dark" title={null}>
                    <div className={styles.cardPad}>
                        <div className={styles.title}>
                            {m.premiumGrowth.title}
                        </div>

                        <div className={styles.valueRow}>
                            <div className={styles.value}>
                                {m.premiumGrowth.value}
                            </div>
                            <div className={styles.muted}>
                                {m.premiumGrowth.sub}
                            </div>
                        </div>

                        <div className={styles.foot}>
                            {m.premiumGrowth.foot}
                        </div>

                        <button className={styles.link} type="button">
                            {m.premiumGrowth.link}
                        </button>
                    </div>
                </Card>

                <Card variant="dark" title={null}>
                    <div className={styles.cardPad}>
                        <div className={styles.title}>{m.exposure.title}</div>

                        <div className={styles.expo}>
                            <div className={styles.expoBars}>
                                {m.exposure.bars.map((b) => (
                                    <div
                                        key={b.label}
                                        className={styles.barRow}
                                    >
                                        <div className={styles.barTrack}>
                                            <div
                                                className={styles.barFill}
                                                style={{
                                                    width: `${clampPct(b.value)}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.expoLegend}>
                                {m.exposure.bars.map((b) => (
                                    <div
                                        key={b.label}
                                        className={styles.legendRow}
                                    >
                                        <span className={styles.legendLabel}>
                                            {b.label}:
                                        </span>
                                        <span className={styles.legendVal}>
                                            {b.value}%
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

function Dots({ count = 0 }) {
    const n = Math.max(0, Math.min(4, count));
    return (
        <div className={styles.dots} aria-label={`Winnability ${n} of 4`}>
            {Array.from({ length: 4 }).map((_, idx) => (
                <span
                    key={idx}
                    className={`${styles.dot} ${idx < n ? styles.dotOn : ''}`}
                />
            ))}
        </div>
    );
}

function clampPct(v) {
    const num = Number(v);
    if (Number.isNaN(num)) return 0;
    return Math.max(0, Math.min(100, num));
}
