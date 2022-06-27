import { Navigate, Route, Routes } from "react-router-dom";
import LogInPage from "../components/page/LogInPage";
import SignupPage from "../components/page/SignupPage";
import HeaderLayout from "../components/HeaderLayout";
import HomePage from "../components/page/HomePage";
import Logo from "../components/layout/Logo";
import SignupCompanyPage from "../components/page/SignupCompanyPage";
import MyNetwork from "../components/page/MyNetwork";
import Connections from "../components/MyNetwork/Sidebars/Connection/Connections";
import Contacts from "../components/MyNetwork/Sidebars/Contact/Contacts";
import PeopleAndFollow from "../components/MyNetwork/Sidebars/PeopleAndFollow/PeopleAndFollow";
import JobsPage from "../components/page/JobsPage";
import MyJobs from "../components/Jobs/Sidebars/MyJobs";
import ApplicationSetting from "../components/Jobs/Sidebars/ApplicationSetting/ApplicationSetting";

export default function Router() {
  return (
    <Routes>
      {true ? (
        <>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomePage />} />
            {/* myNetwork */}
            <Route path="myNetwork" element={<MyNetwork />} />
            <Route path="myNetwork/connections" element={<Connections />} />
            <Route path="myNetwork/contacts" element={<Contacts />} />
            <Route
              path="myNetwork/peopleAndFollow"
              element={<PeopleAndFollow />}
            />
            {/* Jobs */}
            <Route path="jobs" element={<JobsPage />} />
            <Route path="jobs/myJobs" element={<MyJobs />}></Route>
            <Route
              path="jobs/applicationSetting"
              element={<ApplicationSetting />}
            />
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
