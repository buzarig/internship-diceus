import { Routes, Route, Navigate } from 'react-router-dom';
import Shell from '../components/layout/Shell/Shell.jsx';
import DashboardPage from '../pages/Dashboard/DashboardPage.jsx';
import AccountGeneralPage from '../pages/AccountGeneral/AccountGeneralPage.jsx';

export default function App() {
    return (
        <Shell>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/account/:id" element={<AccountGeneralPage />} />
            </Routes>
        </Shell>
    );
}
