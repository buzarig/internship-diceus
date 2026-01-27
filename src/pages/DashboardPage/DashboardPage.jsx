import Shell from '../../components/layout/Shell/Shell.jsx';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
    return (
        <Shell title="Dashboard">
            <div className={styles.box}>Dashboard page</div>
        </Shell>
    );
}
