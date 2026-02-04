import Card from '../../ui/Card/Card.jsx';
import styles from './PoliciesCardsRow.module.css';

export default function PoliciesCardsRow({ data }) {
    const items = data?.policiesCards ?? [];

    return (
        <section className={styles.section}>
            <h2 className={styles.h2}>Policies</h2>

            <Card variant="dark" title={null}>
                <div className={styles.row}>
                    {items.map((p) => (
                        <div key={p.key} className={styles.item}>
                            <div className={styles.icon} aria-hidden="true">
                                {getPolicyIcon(p.icon)}
                            </div>

                            <div className={styles.text}>
                                <div className={styles.title}>{p.title}</div>
                                <div className={styles.sub}>
                                    <span className={styles.muted}>
                                        Premium:
                                    </span>{' '}
                                    {p.premium}
                                </div>
                                <div className={styles.sub}>
                                    <span className={styles.muted}>
                                        Eff.Date:
                                    </span>{' '}
                                    {p.effDate}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </section>
    );
}

function getPolicyIcon(name) {
    const common = {
        width: 18,
        height: 18,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    };

    switch (name) {
        case 'ship':
            return (
                <svg {...common}>
                    <path d="M3 20h18" />
                    <path d="M4 18l2-8h12l2 8" />
                    <path d="M6 10V6l6-3 6 3v4" />
                    <path d="M9 10V7" />
                    <path d="M15 10V7" />
                </svg>
            );

        case 'shield':
            return (
                <svg {...common}>
                    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                    <path d="M9 12l2 2 4-5" />
                </svg>
            );

        case 'bolt':
            return (
                <svg {...common}>
                    <path d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z" />
                </svg>
            );

        case 'building':
            return (
                <svg {...common}>
                    <path d="M3 21h18" />
                    <path d="M5 21V7a2 2 0 0 1 2-2h3v16" />
                    <path d="M14 21V3h5a2 2 0 0 1 2 2v16" />
                    <path d="M8 9h1" />
                    <path d="M8 13h1" />
                    <path d="M8 17h1" />
                    <path d="M17 9h1" />
                    <path d="M17 13h1" />
                    <path d="M17 17h1" />
                </svg>
            );

        case 'umbrella':
            return (
                <svg {...common}>
                    <path d="M12 2a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9z" />
                    <path d="M12 11v7a2 2 0 0 0 4 0" />
                </svg>
            );

        default:
            return null;
    }
}
