import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home.tsx";
import "./app.css"
import AboutPage from "./pages/about-page/AboutPage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutPage />} />
                {/*<Route path="/events" element={<Events />} />*/}
            </Routes>
        </Router>
    )
}

export default App
