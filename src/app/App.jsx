import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage.jsx';
import AccountsPage from '../pages/AccountsPage/AccountsPage.jsx';
import AccountPage from '../pages/AccountPage/AccountPage.jsx';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/accounts" element={<AccountsPage />} />
                <Route path="/account/:id" element={<AccountPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
