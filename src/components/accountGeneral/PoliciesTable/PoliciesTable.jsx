import { useMemo, useRef, useState } from 'react';
import Card from '../../ui/Card/Card.jsx';
import styles from './PoliciesTable.module.css';
import Popover from '../../ui/Popover/Popover.jsx';
import popStyles from '../../ui/Popover/Popover.module.css';

function lossColor(v) {
    if (v == null) return 'lossNA';
    if (v >= 70) return 'lossRed';
    if (v >= 45) return 'lossYellow';
    return 'lossGreen';
}

function statusColor(v) {
    if (v === 'Active') return 'dotGreen';
    if (v === 'Pending') return 'dotYellow';
    return 'dotGray';
}

export default function PoliciesTable({ data }) {
    const rows = useMemo(() => data?.policiesTable?.rows ?? [], [data]);
    const total = data?.policiesTable?.total ?? null;

    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return rows;
        return rows.filter((r) => {
            const line = (r.line ?? '').toLowerCase();
            const id = (r.id ?? '').toLowerCase();
            const status = (r.status ?? '').toLowerCase();
            return line.includes(q) || id.includes(q) || status.includes(q);
        });
    }, [rows, query]);

    return (
        <Card
            padding="md"
            variant="dark"
            title={
                <div className={styles.header}>
                    <div className={styles.controls}>
                        <div className={styles.search}>
                            <input
                                className={styles.searchInput}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search"
                            />
                        </div>

                        <button className={styles.chipBtn} type="button">
                            Filter
                        </button>
                        <button className={styles.chipBtn} type="button">
                            Group
                        </button>
                    </div>
                </div>
            }
            right={null}
        >
            <div className={styles.table}>
                <div className={`${styles.row} ${styles.head}`}>
                    <div>LINE</div>
                    <div>EFF. DATE</div>
                    <div>EXP. DATE</div>
                    <div>STATUS</div>
                    <div>EXPIRING TECH</div>
                    <div>EXPIRING PREMIUM</div>
                    <div>RENEWAL TO TECH</div>
                    <div>RENEWAL TECH</div>
                    <div>RENEWAL PREMIUM</div>
                    <div>RATE CHANGE</div>
                    <div>LOSS RATIO</div>
                    <div />
                </div>

                <div className={styles.tableWrapper}>
                    {filtered.map((r) => (
                        <div key={r.id} className={styles.row}>
                            <div className={styles.lineCell}>
                                <span
                                    className={`${styles.lineIcon} ${
                                        styles[`icon${r.icon ?? 'Blue'}`]
                                    }`}
                                    aria-hidden="true"
                                >
                                    {r.iconText ?? '●'}
                                </span>

                                <div className={styles.lineText}>
                                    <div className={styles.lineTitle}>
                                        {r.line}
                                    </div>
                                    <div className={styles.lineSub}>{r.id}</div>
                                </div>
                            </div>
                            <div className={styles.muted}>{r.effDate}</div>
                            <div className={styles.muted}>{r.expDate}</div>
                            <div className={styles.status}>
                                <span
                                    className={`${styles.dot} ${
                                        styles[statusColor(r.status)]
                                    }`}
                                    aria-hidden="true"
                                />
                                <span className={styles.muted}>{r.status}</span>
                            </div>
                            <div className={styles.muted}>{r.expiringTech}</div>
                            <div className={styles.muted}>
                                {r.expiringPremium}
                            </div>
                            <div className={styles.muted}>
                                {r.renewalToTech}
                            </div>
                            <div className={styles.muted}>{r.renewalTech}</div>
                            <div className={styles.strong}>
                                {r.renewalPremium}
                            </div>
                            <div
                                className={`${styles.muted} ${
                                    r.rateChangeColor === 'red'
                                        ? styles.rateRed
                                        : r.rateChangeColor === 'green'
                                          ? styles.rateGreen
                                          : ''
                                }`}
                            >
                                {r.rateChange ?? 'N/A'}
                            </div>
                            <div className={styles.loss}>
                                {r.lossRatio == null ? (
                                    <span className={styles.muted}>N/A</span>
                                ) : (
                                    <span
                                        className={`${styles.lossPill} ${
                                            styles[lossColor(r.lossRatio)]
                                        }`}
                                    >
                                        {r.lossRatio}%
                                    </span>
                                )}
                            </div>
                            <div className={styles.more}>
                                <MoreMenu />
                            </div>
                        </div>
                    ))}

                    {total ? (
                        <div className={`${styles.row} ${styles.total}`}>
                            <div />
                            <div />
                            <div />
                            <div className={styles.totalLabel}>
                                TOTAL ({filtered.length})
                            </div>
                            <div className={styles.muted}>
                                {total.expiringTech}
                            </div>
                            <div className={styles.muted}>
                                {total.expiringPremium}
                            </div>
                            <div className={styles.muted}>
                                {total.renewalToTech}
                            </div>
                            <div className={styles.muted}>
                                {total.renewalTech}
                            </div>
                            <div className={styles.strong}>
                                {total.renewalPremium}
                            </div>
                            <div className={styles.muted}>
                                {total.rateChange}
                            </div>
                            <div className={styles.loss}>
                                <span
                                    className={`${styles.lossPill} ${styles.lossYellow}`}
                                >
                                    {total.lossRatio}
                                </span>
                            </div>
                            <div />
                        </div>
                    ) : null}
                </div>
            </div>
        </Card>
    );
}

function MoreMenu() {
    const [open, setOpen] = useState(false);
    const btnRef = useRef(null);

    return (
        <>
            <button
                ref={btnRef}
                className={styles.moreBtn}
                type="button"
                aria-label="More"
                onClick={() => setOpen((v) => !v)}
            >
                ⋮
            </button>

            <Popover
                isOpen={open}
                anchorRef={btnRef}
                onClose={() => setOpen(false)}
                placement="bottom-end"
            >
                <button
                    className={popStyles.item}
                    type="button"
                    onClick={() => setOpen(false)}
                >
                    View policy
                </button>
                <button
                    className={popStyles.item}
                    type="button"
                    onClick={() => setOpen(false)}
                >
                    Open details
                </button>
            </Popover>
        </>
    );
}
