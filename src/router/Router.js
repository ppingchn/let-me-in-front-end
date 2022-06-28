import { Navigate, Route, Routes } from 'react-router-dom';
import LogInPage from '../components/page/LogInPage';
import SignupPage from '../components/page/SignupPage';
import HeaderLayout from '../components/HeaderLayout';
import HomePage from '../components/page/HomePage';
import Logo from '../components/layout/Logo';
import SignupCompanyPage from '../components/page/SignupCompanyPage';
import UserPage from '../components/page/UserPage';
import JobPage from '../components/page/MessagePage';
import MessagePage from '../components/page/MessagePage';
import NotificationPage from '../components/page/NotificationsPage';

export default function Router() {
  return (
    <Routes>
      {true ? (
        <>
          <Route path="/" element={<HeaderLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="messaging" element={<MessagePage />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route path="user/:id" element={<UserPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Logo />}>
            <Route index element={<Navigate to="/login" />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="signupCompany" element={<SignupCompanyPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}
