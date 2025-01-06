import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home.tsx";
import "./app.css"
import AboutPage from "./pages/about-page/AboutPage.tsx";
// import EventsPage from "./pages/events-page/EventsPage.tsx";
import FirstBytePage from './pages/first-byte-page/FirstBytePage.tsx';
import JudgesPage from './pages/first-byte-page/judges-page/JudgesPage.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/firstbyte" element={<FirstBytePage />} />
                <Route path="/judges" element={<JudgesPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutPage />} />
            </Routes>
        </Router>
    )
}

export default App
