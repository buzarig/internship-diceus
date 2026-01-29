import Card from '../../ui/Card/Card.jsx';
import data from '../../../mock/dashboardData.js';
import styles from './MarketIntelCard.module.css';

export default function MarketIntelCard() {
    return (
        <Card title="Market intelligence" variant="dark">
            <ul className={styles.list}>
                {data.marketIntel.map((i) => (
                    <li key={i.id} className={styles.item}>
                        <span className={`${styles.dot} ${styles[i.color]}`} />
                        <span className={styles.text}>{i.text}</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}
