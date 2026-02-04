import Card from '../../ui/Card/Card.jsx';
import styles from './AccountHero.module.css';
import logo from '../../../assets/images/maritime-logo.png';

export default function AccountHero({ account, needsAttention }) {
    return (
        <div className={styles.grid}>
            {/* LEFT side */}
            <div className={styles.left}>
                <div className={styles.topRow}>
                    <div className={styles.logoWrap} aria-hidden="true">
                        {account?.logoUrl ? (
                            <img className={styles.logoImg} src={logo} alt="" />
                        ) : (
                            <div className={styles.logoFallback}>
                                {account?.logoText ?? 'ML'}
                            </div>
                        )}
                    </div>

                    <div className={styles.main}>
                        <div className={styles.name}>{account?.name}</div>
                        <div className={styles.addrWrapper}>
                            <div className={styles.addr}>
                                {account?.address}
                            </div>
                            <div className={styles.meta}>
                                <div className={styles.metaCol}>
                                    <div className={styles.k}>
                                        EXISTING ACCOUNT
                                    </div>
                                    <div className={styles.v}>
                                        {account?.existingAccount}
                                    </div>
                                </div>
                                <div className={styles.metaCol}>
                                    <div className={styles.k}>BROKER</div>
                                    <div className={styles.v}>
                                        {account?.broker}
                                    </div>
                                </div>
                                <div className={styles.metaCol}>
                                    <div className={styles.k}>UNDERWRITER</div>
                                    <div className={styles.v}>
                                        {account?.underwriter}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT side */}
            <Card padding="none" variant="dark" title={null}>
                <div className={styles.attnBox}>
                    <div className={styles.attnTitle}>
                        <span className={styles.attnDot} aria-hidden="true" />
                        <span>
                            {needsAttention?.title ?? 'Needs Attention'}
                        </span>
                    </div>

                    <div className={styles.attnGrid}>
                        {(needsAttention?.items ?? []).map((i) => (
                            <div key={i.title} className={styles.attnItem}>
                                <div className={styles.attnItemTitle}>
                                    {i.title}
                                </div>
                                <div className={styles.attnItemSub}>
                                    {i.sub1}
                                </div>
                                <button
                                    className={styles.attnLink}
                                    type="button"
                                >
                                    {i.link}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}
