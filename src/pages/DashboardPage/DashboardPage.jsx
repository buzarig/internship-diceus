import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Shell from '../../components/layout/Shell/Shell.jsx';
import Card from '../../components/ui/Card/Card.jsx';
import Tabs from '../../components/ui/Tabs/Tabs.jsx';
import data from '../../mock/dashboard.json';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
    const [tab, setTab] = useState(data.workQueueTabs[0]);

    const workRows = useMemo(() => {
        return data.workQueueRows.filter((r) => r.status === tab);
    }, [tab]);

    return (
        <Shell title="Dashboard">
            <div className={styles.grid}>
                <Card
                    title="Work Queue"
                    right={
                        <span className={styles.muted}>
                            {workRows.length} items
                        </span>
                    }
                >
                    <Tabs
                        items={data.workQueueTabs}
                        value={tab}
                        onChange={setTab}
                    />

                    <div className={styles.table}>
                        <div className={`${styles.row} ${styles.head}`}>
                            <div>Task</div>
                            <div>Account</div>
                            <div>Owner</div>
                            <div>Priority</div>
                        </div>

                        {workRows.map((r) => (
                            <div key={r.id} className={styles.row}>
                                <div className={styles.strong}>{r.title}</div>
                                <div>{r.account}</div>
                                <div>{r.owner}</div>
                                <div>{r.priority}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Market Intelligence">
                    <div className={styles.list}>
                        {data.marketNews.map((n) => (
                            <div key={n.id} className={styles.listItem}>
                                <div className={styles.strong}>{n.title}</div>
                                <div className={styles.muted}>{n.time}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className={styles.full}>
                    <Card title="My Accounts">
                        <div className={styles.table}>
                            <div className={`${styles.row} ${styles.head}`}>
                                <div>Account</div>
                                <div>Owner</div>
                                <div>Triage</div>
                                <div>Status</div>
                            </div>

                            {data.accounts.map((a) => (
                                <Link
                                    key={a.id}
                                    to={`/account/${a.id}`}
                                    className={`${styles.row} ${styles.linkRow}`}
                                >
                                    <div className={styles.strong}>
                                        {a.name}
                                    </div>
                                    <div>{a.owner}</div>
                                    <div>{a.triage}</div>
                                    <div>{a.status}</div>
                                </Link>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Shell>
    );
}
