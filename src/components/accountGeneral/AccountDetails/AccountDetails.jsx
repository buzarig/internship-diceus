import styles from './AccountDetails.module.css';

export default function AccountDetails({ data }) {
    const menu = data?.accountDetails?.menu ?? [];
    const activeKey = data?.accountDetails?.activeKey ?? 'winnability';

    const w = data?.accountDetails?.winnability ?? {};
    const increasing = w?.increasing ?? [];
    const decreasing = w?.decreasing ?? [];
    const recommendations = w?.recommendations ?? [];

    return (
        <section className={styles.section}>
            <div className={styles.shell}>
                <aside className={styles.aside}>
                    {menu.map((group) => (
                        <div key={group.title} className={styles.group}>
                            <div className={styles.groupHeader}>
                                <div className={styles.groupTitle}>
                                    {group.title}
                                </div>
                                <div className={styles.badge}>
                                    {group.count}
                                </div>
                            </div>

                            {group.items?.length ? (
                                <nav className={styles.nav}>
                                    {group.items.map((item) => {
                                        const isActive = item.key === activeKey;
                                        return (
                                            <button
                                                key={item.key}
                                                type="button"
                                                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                                            >
                                                {item.label}
                                            </button>
                                        );
                                    })}
                                </nav>
                            ) : null}
                        </div>
                    ))}
                </aside>

                <div className={styles.divider} aria-hidden="true" />

                <div className={styles.content}>
                    <div className={styles.pageTitleRow}>
                        <h2 className={styles.pageTitle}>Winnability</h2>
                    </div>

                    <div className={styles.topGrid}>
                        <div className={styles.smallCard}>
                            <div className={styles.smallCardTitle}>
                                Overall Score
                            </div>

                            <div className={styles.scoreRow}>
                                <div className={styles.scoreValue}>
                                    {w.score}%
                                </div>

                                <div className={styles.scorePill}>
                                    <span
                                        className={styles.dots}
                                        aria-hidden="true"
                                    >
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <span
                                                    key={i}
                                                    className={`${styles.dot} ${
                                                        i < (w.dots ?? 0)
                                                            ? styles.dotOn
                                                            : styles.dotOff
                                                    }`}
                                                />
                                            ),
                                        )}
                                    </span>
                                    <span className={styles.scoreLabel}>
                                        {w.scoreLabel}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.smallCard}>
                            <div className={styles.smallCardTitle}>
                                Historical trend
                            </div>

                            <div className={styles.trendBox}>
                                <svg
                                    className={styles.trendSvg}
                                    viewBox="0 0 240 70"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10 45 L55 35 L95 42 L130 28 L170 30 L210 22"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <div className={styles.trendLabels}>
                                    <span>Jan</span>
                                    <span>Feb</span>
                                    <span>Mar</span>
                                    <span>Apr</span>
                                    <span>Now</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.smallCard}>
                            <div className={styles.smallCardTitle}>
                                Position
                            </div>

                            <div className={styles.posRow}>
                                <div className={styles.posBars}>
                                    {(w.positionBars ?? []).map((b) => (
                                        <div
                                            key={b.label}
                                            className={styles.posBarRow}
                                        >
                                            <div className={styles.posBarTrack}>
                                                <div
                                                    className={
                                                        styles.posBarFill
                                                    }
                                                    style={{
                                                        width: `${b.value}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.posLegend}>
                                    {(w.positionLegend ?? []).map((l) => (
                                        <div
                                            key={l.text}
                                            className={styles.posLegendLine}
                                        >
                                            <span
                                                className={styles.posLegendText}
                                            >
                                                {l.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.midGrid}>
                        <div className={styles.bigCard}>
                            <div className={styles.bigCardHeader}>
                                <span
                                    className={styles.iconUp}
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                                <span className={styles.bigCardTitle}>
                                    Increasing Winnability
                                </span>
                            </div>

                            <div className={styles.factorList}>
                                {increasing.map((it) => (
                                    <div
                                        key={it.rank}
                                        className={styles.factorRow}
                                    >
                                        <div className={styles.rankGreen}>
                                            {it.rank}
                                        </div>

                                        <div className={styles.factorMain}>
                                            <div className={styles.factorLabel}>
                                                {it.label}
                                            </div>
                                            <div
                                                className={
                                                    styles.factorBarTrack
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.factorBarFillGreen
                                                    }
                                                    style={{
                                                        width: `${it.bar}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.factorDelta}>
                                            {it.delta}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.bigCard}>
                            <div className={styles.bigCardHeader}>
                                <span
                                    className={styles.iconDown}
                                    aria-hidden="true"
                                >
                                    ↘
                                </span>
                                <span className={styles.bigCardTitle}>
                                    Decreasing Winnability
                                </span>
                            </div>

                            <div className={styles.factorList}>
                                {decreasing.map((it) => (
                                    <div
                                        key={it.rank}
                                        className={styles.factorRow}
                                    >
                                        <div className={styles.rankAmber}>
                                            {it.rank}
                                        </div>

                                        <div className={styles.factorMain}>
                                            <div className={styles.factorLabel}>
                                                {it.label}
                                            </div>
                                            <div
                                                className={
                                                    styles.factorBarTrack
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.factorBarFillAmber
                                                    }
                                                    style={{
                                                        width: `${it.bar}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div
                                            className={styles.factorDeltaMuted}
                                        >
                                            {it.delta}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.recoCard}>
                        <div className={styles.recoHeader}>
                            <span
                                className={styles.recoIcon}
                                aria-hidden="true"
                            >
                                ✦
                            </span>
                            <span className={styles.recoTitle}>
                                AI-Powered Recommendations
                            </span>
                        </div>

                        <div className={styles.recoList}>
                            {recommendations.map((r, idx) => (
                                <div key={idx} className={styles.recoRow}>
                                    <div className={styles.recoText}>
                                        <div className={styles.recoHeadline}>
                                            {r.title}
                                        </div>
                                        <div className={styles.recoBody}>
                                            {r.body}
                                        </div>
                                    </div>

                                    <button
                                        className={styles.applyBtn}
                                        type="button"
                                    >
                                        Apply
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
