import styles from './Shell.module.css';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Topbar from '../Topbar/Topbar.jsx';

export default function Shell({ title, children }) {
    return (
        <div className={styles.shell}>
            <Sidebar />
            <div className={styles.main}>
                <Topbar title={title} />
                <main className={styles.content}>{children}</main>
            </div>
        </div>
    );
}
