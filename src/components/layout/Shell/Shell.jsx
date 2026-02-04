import styles from './Shell.module.css';
import Topbar from '../Topbar/Topbar.jsx';
import TopNav from '../TopNav/TopNav.jsx';

export default function Shell({ children }) {
    return (
        <div className={styles.shell}>
            <Topbar />
            <TopNav />
            <main className={styles.content}>{children}</main>
        </div>
    );
}
