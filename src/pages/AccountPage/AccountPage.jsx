import { useParams, Link } from 'react-router-dom';
import Shell from '../../components/layout/Shell/Shell.jsx';
import Card from '../../components/ui/Card/Card.jsx';
import styles from './AccountPage.module.css';

export default function AccountPage() {
    const { id } = useParams();

    return (
        <Shell title={`Account ${id}`}>
            <div className={styles.stack}>
                <Card title="Account details">
                    <div className={styles.text}>
                        This is a placeholder. Next we will build the Account
                        page UI from the SVG.
                    </div>
                    <Link className={styles.link} to="/accounts">
                        ← Back to accounts
                    </Link>
                </Card>
            </div>
        </Shell>
    );
}
