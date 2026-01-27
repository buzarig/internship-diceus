import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage.jsx';
import AccountPage from '../pages/AccountPage/AccountPage.jsx';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/account/:id" element={<AccountPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
