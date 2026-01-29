import { useMemo, useState, useRef } from 'react';
import Popover from '../../ui/Popover/Popover.jsx';
import popStyles from '../../ui/Popover/Popover.module.css';

import Card from '../../ui/Card/Card.jsx';
import data from '../../../mock/dashboardData.js';
import styles from './MyAccountsTable.module.css';

function lossColor(v) {
    if (v >= 60) return 'lossRed';
    if (v >= 35) return 'lossYellow';
    return 'lossGreen';
}

function appetiteColor(v) {
    if (v === 'HIGH') return 'pillBlue';
    if (v === 'MEDIUM') return 'pillBlueSoft';
    if (v === 'CAUTIOUS') return 'pillGray';
    return 'pillGray';
}

function statusColor(v) {
    if (v === 'Active') return 'dotGreen';
    if (v === 'Under review') return 'dotBlue';
    return 'dotGray';
}

export default function MyAccountsTable() {
    const rows = useMemo(() => data.myAccounts ?? [], []);
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return rows;
        return rows.filter((r) => {
            return (
                r.accountName.toLowerCase().includes(q) ||
                r.line.toLowerCase().includes(q) ||
                r.broker.toLowerCase().includes(q)
            );
        });
    }, [rows, query]);

    return (
        <Card
            title={
                <div className={styles.header}>
                    <div className={styles.headerTitle}>My accounts</div>
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
                            Sort
                        </button>
                        <button className={styles.chipBtn} type="button">
                            Group
                        </button>
                        <button className={styles.primaryBtn} type="button">
                            + New
                        </button>
                    </div>
                </div>
            }
            right={null}
            variant="dark"
        >
            <div className={styles.table}>
                <div className={`${styles.row} ${styles.head}`}>
                    <div>ACCOUNT NAME/TYPE</div>
                    <div>LINE</div>
                    <div>BROKER</div>
                    <div>RENEWAL DATE</div>
                    <div>PREMIUM</div>
                    <div>RATED PREMIUM</div>
                    <div>LOSS RATIO</div>
                    <div>APPETITE</div>
                    <div>STATUS</div>
                    <div>TRIAGE</div>
                    <div>WINNABILITY</div>
                    <div />
                </div>

                {filtered.map((r) => (
                    <div key={r.id} className={styles.row}>
                        <div className={styles.accountCell}>
                            <div className={styles.accountName}>
                                {r.accountName}
                            </div>
                            <div className={styles.accountType}>
                                {r.accountType}
                            </div>
                        </div>

                        <div className={styles.muted}>{r.line}</div>
                        <div className={styles.muted}>{r.broker}</div>
                        <div className={styles.muted}>{r.renewalDate}</div>

                        <div className={styles.linkish}>{r.premium}</div>
                        <div className={styles.muted}>{r.ratedPremium}</div>

                        <div className={styles.loss}>
                            <span
                                className={`${styles.lossPill} ${styles[lossColor(r.lossRatio)]}`}
                            >
                                {r.lossRatio}%
                            </span>
                        </div>

                        <div className={styles.cellAppetite}>
                            <span
                                className={`${styles.pill} ${styles.pillWide} ${styles[appetiteColor(r.appetite)]}`}
                            >
                                {r.appetite}
                            </span>
                        </div>

                        <div className={styles.status}>
                            <span
                                className={`${styles.dot} ${styles[statusColor(r.status)]}`}
                            />
                            <span className={styles.muted}>{r.status}</span>
                        </div>

                        <div>
                            <span className={styles.triage}>{r.triage}</span>
                        </div>

                        <div className={styles.cellWin}>
                            <div className={styles.winBox}>
                                <div
                                    className={styles.winDots}
                                    aria-hidden="true"
                                >
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className={`${styles.winDot} ${i < r.winnability.dots ? styles.winOn : ''}`}
                                        />
                                    ))}
                                </div>
                                <span className={styles.winText}>
                                    {r.winnability.level}
                                </span>
                            </div>
                        </div>
                        <div className={styles.more}>
                            <MoreMenu />
                        </div>
                    </div>
                ))}
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
                    View account
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
