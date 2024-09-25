import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home.tsx";
import "./app.css"
import AboutPage from "./pages/about-page/AboutPage.tsx";
import EventsPage from "./pages/events-page/EventsPage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutPage />} />
                <Route path="/events" element={<EventsPage />} />
            </Routes>
        </Router>
    )
}

export default App
