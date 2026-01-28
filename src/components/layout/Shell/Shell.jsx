import styles from './Shell.module.css';
import Topbar from '../Topbar/Topbar.jsx';

export default function Shell({ title, children }) {
    return (
        <div className={styles.shell}>
            <Topbar title={title} />
            <div className={styles.container}>{children}</div>
        </div>
    );
}
