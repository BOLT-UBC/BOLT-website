import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LandingPage from "./pages/LandingPage";
import ProtectedPortal from "./pages/ProtectedPortal";
import Team from "./pages/Team";
import JoinTeam from "./pages/JoinTeam";
import CreateTeam from "./pages/CreateTeam";
import AuthCallback from "./pages/AuthCallback";
import LoginPage from "./pages/LoginPage";
import ProtectedStartRegistration from "./pages/ProtectedStartRegistration";
import ProtectedUserInfo from "./pages/ProtectedUserInfo";
import ProtectedResponses from "./pages/ProtectedResponses";
import ProtectedThankYou from "./pages/ProtectedThankYou";
import ProtectedFinalPage from "./pages/ProtectedFinalPage";
import FinalPage from "./pages/FinalPage";
import Portal from "./pages/Portal";
import UnderConstruction from "./pages/UnderConstruction";
import ThankYou from "./pages/ThankYou";

import "./App.css";
import StartRegistration from "./pages/StartRegistration";
import Responses from "./pages/Responses";

export default function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-aspect-ratio: 1/1)" });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<ThankYou />} />
        <Route
          path="/portal"
          element={isSmallScreen ? <UnderConstruction /> : <ProtectedPortal />}
        />{" "}
        <Route path="/registration" element={<ProtectedStartRegistration />} />
        <Route path="/registration/page-1" element={<ProtectedUserInfo />} />
        <Route path="/registration/page-2" element={<ProtectedResponses />} />
        <Route path="/registration/page-3" element={<ProtectedFinalPage />} />
        <Route path="/registration/page-4" element={<ProtectedThankYou />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
}
