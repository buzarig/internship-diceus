import styles from './AccountGeneralPage.module.css';
import data from '../../mock/accountGeneral.js';

import Breadcrumbs from '../../components/accountGeneral/Breadcrumbs/Breadcrumbs.jsx';
import AccountHero from '../../components/accountGeneral/AccountHero/AccountHero.jsx';
import PerformanceMetrics from '../../components/accountGeneral/PerformanceMetrics/PerformanceMetrics.jsx';
import PoliciesCards from '../../components/accountGeneral/PoliciesCards/PoliciesCardsRow.jsx';
import AccountStatusCompliance from '../../components/accountGeneral/AccountStatusCompliance/AccountStatusCompliance.jsx';
import AccountDetails from '../../components/accountGeneral/AccountDetails/AccountDetails.jsx';
import Communication from '../../components/accountGeneral/Communication/Communication.jsx';
import PoliciesTable from '../../components/accountGeneral/PoliciesTable/PoliciesTable.jsx';

export default function AccountGeneralPage() {
    return (
        <div className={styles.page}>
            <Breadcrumbs items={data.breadcrumb} />

            <AccountHero
                account={data.account}
                needsAttention={data.needsAttention}
            />

            <section className={styles.section}>
                <PerformanceMetrics data={data} />
            </section>

            <section className={styles.section}>
                <PoliciesCards data={data} />
            </section>

            <section className={styles.sectionGrid}>
                <AccountStatusCompliance data={data} />
            </section>

            <section className={styles.section}>
                <h2 className={styles.h2}>Account Details</h2>
                <AccountDetails data={data} />
            </section>

            <section className={styles.section}>
                <h2 className={styles.h2}>Communication</h2>
                <Communication data={data} />
            </section>

            <section className={styles.section}>
                <h2 className={styles.h2}>Policies</h2>
                <PoliciesTable data={data} />
            </section>
        </div>
    );
}
