import Card from '../../ui/Card/Card.jsx';
import data from '../../../mock/dashboardData.js';
import styles from './PortfolioGoalsCard.module.css';

function SegmentedBar({ segments }) {
    return (
        <div className={styles.segBar}>
            {segments.map((s, idx) => (
                <div
                    key={idx}
                    className={`${styles.seg} ${styles[s.color]}`}
                    style={{ width: `${s.pct}%` }}
                />
            ))}
        </div>
    );
}

function ProgressBar({ pct }) {
    return (
        <div className={styles.progress}>
            <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        </div>
    );
}

export default function PortfolioGoalsCard() {
    return (
        <Card title="Portfolio goals" variant="dark">
            <div className={styles.list}>
                {data.portfolioGoals.map((g) => {
                    const isSegmented = Array.isArray(g.segments);
                    const isProgress = typeof g.progressPct === 'number';

                    return (
                        <div key={g.id} className={styles.item}>
                            <div className={styles.top}>
                                <div className={styles.label}>
                                    {g.title.toUpperCase()}
                                </div>
                                {g.targetText ? (
                                    <div className={styles.target}>
                                        {g.targetText}
                                    </div>
                                ) : null}
                            </div>

                            {isSegmented && (
                                <>
                                    <SegmentedBar segments={g.segments} />
                                    <div className={styles.metaRow}>
                                        <div className={styles.valueCenter}>
                                            {g.valuePct}%
                                        </div>
                                        <div className={styles.delta}>
                                            {g.deltaPct !== 0
                                                ? `${g.deltaPct > 0 ? '+' : ''}${g.deltaPct}%`
                                                : ''}
                                            {g.deltaLabel
                                                ? ` (${g.deltaLabel})`
                                                : ''}
                                        </div>
                                    </div>
                                </>
                            )}

                            {isProgress && (
                                <>
                                    <div className={styles.rangeRow}>
                                        <div className={styles.valueChip}>
                                            {g.valueText}
                                        </div>
                                        <div className={styles.rangeMax}>
                                            {g.rangeMax}
                                        </div>
                                    </div>
                                    <ProgressBar pct={g.progressPct} />
                                    <div className={styles.pct}>
                                        {g.progressPct}%
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
