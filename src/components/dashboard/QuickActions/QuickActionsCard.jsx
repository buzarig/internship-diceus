import Card from '../../ui/Card/Card.jsx';
import data from '../../../mock/dashboardData.js';
import styles from './QuickActionsCard.module.css';

export default function QuickActionsCard() {
    return (
        <Card title="Quick actions" variant="dark">
            <div className={styles.list}>
                {data.quickActions.map((a) => (
                    <button key={a} className={styles.btn} type="button">
                        {a}
                    </button>
                ))}
            </div>
        </Card>
    );
}
