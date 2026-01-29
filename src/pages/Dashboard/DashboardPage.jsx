import styles from './DashboardPage.module.css';

import WorkQueueCard from '../../components/dashboard/WorkQueue/WorkQueueCard.jsx';
import PortfolioGoalsCard from '../../components/dashboard/PortfolioGoals/PortfolioGoalsCard.jsx';
import QuickActionsCard from '../../components/dashboard/QuickActions/QuickActionsCard.jsx';
import MarketIntelCard from '../../components/dashboard/MarketIntel/MarketIntelCard.jsx';
import MyAccountsTable from '../../components/dashboard/MyAccounts/MyAccountsTable.jsx';

export default function DashboardPage() {
    return (
        <div className={styles.page}>
            <div className={styles.topGrid}>
                <section className={styles.workQueue}>
                    <WorkQueueCard />
                </section>

                <section className={styles.portfolioGoals}>
                    <PortfolioGoalsCard />
                </section>

                <section className={styles.quickActions}>
                    <QuickActionsCard />
                </section>

                <section className={styles.marketIntel}>
                    <MarketIntelCard />
                </section>
            </div>

            <section className={styles.myAccounts}>
                <MyAccountsTable />
            </section>
        </div>
    );
}
