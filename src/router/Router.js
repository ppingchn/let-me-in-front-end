import { Navigate, Route, Routes } from "react-router-dom";
import LogInPage from "../components/page/LogInPage";
import SignupPage from "../components/page/SignupPage";
import HeaderLayout from "../components/HeaderLayout";
import HomePage from "../components/page/HomePage";

export default function Router() {
  return (
    <Routes>
      {false ? (
        <>
          <Route path="/" element={<HeaderLayout />}>
            <Route path="home" element={<HomePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LogInPage />} />

          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}
