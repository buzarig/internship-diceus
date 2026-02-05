import { useMemo, useRef, useState } from 'react';
import Card from '../../ui/Card/Card.jsx';
import data from '../../../mock/dashboardData.js';
import styles from './WorkQueueCard.module.css';

import Popover from '../../ui/Popover/Popover.jsx';
import popStyles from '../../ui/Popover/Popover.module.css';

function statusColor(status) {
    if (status === 'New') return 'blue';
    if (status === 'Pending Review') return 'yellow';
    if (status === 'Completed') return 'green';
    return 'gray';
}

export default function WorkQueueCard() {
    const tabsBase = useMemo(() => data.workQueueTabs ?? [], []);
    const allRows = useMemo(() => data.workQueueRows ?? [], []);

    const [activeTab, setActiveTab] = useState(tabsBase[0]?.key ?? 'assigned');

    const tabs = useMemo(() => {
        return tabsBase.map((t) => ({
            ...t,
            count: allRows.filter((r) => r.tab === t.key).length,
        }));
    }, [tabsBase, allRows]);

    const rows = useMemo(() => {
        return allRows.filter((r) => r.tab === activeTab);
    }, [allRows, activeTab]);

    const [openRowId, setOpenRowId] = useState(null);
    const anchorRef = useRef(null);

    return (
        <Card padding="md" title="Work Queue" variant="dark">
            <div className={styles.tabs}>
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        type="button"
                        className={`${styles.tab} ${activeTab === t.key ? styles.tabActive : ''}`}
                        onClick={() => setActiveTab(t.key)}
                    >
                        {t.label}{' '}
                        <span className={styles.count}>({t.count})</span>
                    </button>
                ))}
            </div>

            <div className={styles.table}>
                <div className={`${styles.row} ${styles.head}`}>
                    <div>ORIGINATOR</div>
                    <div>CLIENT/LINE</div>
                    <div>TYPE</div>
                    <div>STATUS</div>
                    <div>CREATED</div>
                    <div />
                </div>

                {rows.map((r) => (
                    <div key={r.id} className={styles.row}>
                        <div className={styles.originator}>
                            <div className={styles.avatar}>
                                {r.originatorInitials}
                            </div>
                            <div className={styles.name}>
                                {r.originatorName}
                            </div>
                        </div>

                        <div className={styles.client}>
                            <div className={styles.clientName}>
                                {r.clientName}
                            </div>
                            <div className={styles.clientSub}>
                                {r.clientSub}
                            </div>
                        </div>

                        <div className={styles.type}>{r.type}</div>

                        <div className={styles.status}>
                            <span
                                className={`${styles.dot} ${styles[statusColor(r.status)]}`}
                            />
                            <span>{r.status}</span>
                        </div>

                        <div className={styles.created}>{r.created}</div>

                        <div className={styles.more}>
                            <button
                                ref={openRowId === r.id ? anchorRef : null}
                                className={styles.moreBtn}
                                type="button"
                                aria-label="More"
                                onClick={() =>
                                    setOpenRowId((prev) =>
                                        prev === r.id ? null : r.id,
                                    )
                                }
                            >
                                ⋮
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Popover
                isOpen={openRowId !== null}
                anchorRef={anchorRef}
                onClose={() => setOpenRowId(null)}
                placement="bottom-end"
            >
                <button
                    className={popStyles.item}
                    type="button"
                    onClick={() => setOpenRowId(null)}
                >
                    Open task
                </button>
                <button
                    className={popStyles.item}
                    type="button"
                    onClick={() => setOpenRowId(null)}
                >
                    Assign
                </button>
                <button
                    className={popStyles.item}
                    type="button"
                    onClick={() => setOpenRowId(null)}
                >
                    Mark completed
                </button>
            </Popover>
        </Card>
    );
}
