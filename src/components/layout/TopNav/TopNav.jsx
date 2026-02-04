import styles from './TopNav.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV = [
    { key: 'Dashboard', label: 'Dashboard', icon: 'home', to: '/dashboard' },
    { key: 'Account', label: 'Account', icon: 'stack', to: '/account/a1' },
    { key: 'Brokers', label: 'Brokers', icon: 'user', to: '/brokers' },
    {
        key: 'Submissions',
        label: 'Submissions',
        icon: 'doc',
        to: '/submissions',
    },
    {
        key: 'Organizations',
        label: 'Organizations',
        icon: 'building',
        to: '/organizations',
    },
    {
        key: 'GoalsRules',
        label: 'Goals & Rules',
        icon: 'target',
        to: '/goals-rules',
    },
    { key: 'Admin', label: 'Admin', icon: 'key', to: '/admin' },
];

export default function TopNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const active = getActiveKey(location.pathname);

    return (
        <nav className={styles.wrap}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    {NAV.map((item) => (
                        <button
                            key={item.key}
                            type="button"
                            onClick={() => navigate(item.to)}
                            className={`${styles.pill} ${active === item.key ? styles.active : ''}`}
                        >
                            <span className={styles.icon} aria-hidden="true">
                                {getIcon(item.icon)}
                            </span>
                            <span className={styles.label}>{item.label}</span>
                        </button>
                    ))}
                </div>

                <div className={styles.right}>
                    <button
                        className={styles.circleBtn}
                        type="button"
                        aria-label="Back"
                        onClick={() => navigate(-1)}
                    >
                        {getIcon('arrowLeft')}
                    </button>
                    <button
                        className={styles.circleBtn}
                        type="button"
                        aria-label="Forward"
                        onClick={() => navigate(1)}
                    >
                        {getIcon('arrowRight')}
                    </button>
                </div>
            </div>
        </nav>
    );
}

function getActiveKey(pathname) {
    if (pathname === '/' || pathname.startsWith('/dashboard'))
        return 'Dashboard';

    if (pathname.startsWith('/account')) return 'Account';
    if (pathname.startsWith('/brokers')) return 'Brokers';
    if (pathname.startsWith('/submissions')) return 'Submissions';
    if (pathname.startsWith('/organizations')) return 'Organizations';
    if (pathname.startsWith('/goals-rules')) return 'GoalsRules';
    if (pathname.startsWith('/admin')) return 'Admin';

    return 'Dashboard';
}

function getIcon(name) {
    const common = {
        width: 16,
        height: 16,
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    };
    switch (name) {
        case 'home':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M3 10.5 12 3l9 7.5" />{' '}
                    <path d="M5 10v10h14V10" />{' '}
                </svg>
            );
        case 'stack':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M12 2 3 7l9 5 9-5-9-5Z" />{' '}
                    <path d="M3 12l9 5 9-5" /> <path d="M3 17l9 5 9-5" />{' '}
                </svg>
            );
        case 'user':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M20 21a8 8 0 0 0-16 0" />{' '}
                    <circle cx="12" cy="7" r="4" />{' '}
                </svg>
            );
        case 'doc':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />{' '}
                    <path d="M14 2v6h6" />{' '}
                </svg>
            );
        case 'building':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M3 21h18" />{' '}
                    <path d="M5 21V7a2 2 0 0 1 2-2h3v16" />{' '}
                    <path d="M14 21V3h5a2 2 0 0 1 2 2v16" /> <path d="M8 9h1" />{' '}
                    <path d="M8 13h1" /> <path d="M8 17h1" />{' '}
                    <path d="M17 9h1" /> <path d="M17 13h1" />{' '}
                    <path d="M17 17h1" />{' '}
                </svg>
            );
        case 'target':
            return (
                <svg {...common}>
                    {' '}
                    <circle cx="12" cy="12" r="8" />{' '}
                    <circle cx="12" cy="12" r="3" /> <path d="M12 2v3" />{' '}
                    <path d="M22 12h-3" /> <path d="M12 22v-3" />{' '}
                    <path d="M2 12h3" />{' '}
                </svg>
            );
        case 'key':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M21 2l-2 2" />{' '}
                    <path d="M7 14a4 4 0 1 1 3-6l3 3-2 2-2-2" />{' '}
                    <path d="M12 11l2 2" /> <path d="M14 13l7-7" />{' '}
                </svg>
            );
        case 'arrowLeft':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M15 18l-6-6 6-6" />{' '}
                </svg>
            );
        case 'arrowRight':
            return (
                <svg {...common}>
                    {' '}
                    <path d="M9 6l6 6-6 6" />{' '}
                </svg>
            );
        default:
            return null;
    }
}
