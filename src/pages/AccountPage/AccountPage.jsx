import { useParams } from 'react-router-dom';
import Shell from '../../components/layout/Shell/Shell.jsx';
import styles from './AccountPage.module.css';

export default function AccountPage() {
    const { id } = useParams();

    return (
        <Shell title={`Account: ${id}`}>
            <div className={styles.box}>Account page</div>
        </Shell>
    );
}
