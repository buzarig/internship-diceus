import Shell from '../../components/layout/Shell/Shell.jsx';
import Card from '../../components/ui/Card/Card.jsx';
import data from '../../mock/dashboard.json';
import styles from './AccountsPage.module.css';
import { Link } from 'react-router-dom';

export default function AccountsPage() {
    return (
        <Shell title="Accounts">
            <Card title="My accounts">
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
                            <div className={styles.strong}>{a.name}</div>
                            <div>{a.owner}</div>
                            <div>{a.triage}</div>
                            <div>{a.status}</div>
                        </Link>
                    ))}
                </div>
            </Card>
        </Shell>
    );
}
