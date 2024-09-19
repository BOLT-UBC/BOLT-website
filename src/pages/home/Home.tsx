// import Navbar from '../../components/navbar/navbar';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import BoltUBCTitle from './components/BoltUBCTitle.tsx';
import Sponsors from './components/Sponsors.tsx';
// import Events from './components/Events/Events';
// import OurMission from './components/OurMission/OurMission';
import './style.css';

// import BoltUBCTitleMobile from './components/BoltUBCTitleMobile/BoltUBCTitleMobile';
// import SponsorsMobile from './components/SponsorsMobile/sponsorsMobile';
// import EventsMobile from './components/EventsMobile/EventsMobile';
// import OurMissionMobile from './components/OurMissionMobile/OurMissionMobile';
import {FC} from "react";
import BoltUBCTitleMobile from "./components/BoltUBCTitleMobile.tsx";
import SponsorsMobile from "./components/SponsorsMobile.tsx";
import Events from "./components/Events.tsx";
import EventsMobile from "./components/EventsMobile.tsx";
import OurMissionMobile from "./components/OurMissionMobile.tsx";
import OurMission from "./components/OurMission.tsx";
import Navbar from "../../global-components/Navbar.tsx";

const Home: FC = () => {
    const { scrollY } = useViewportScroll();

    const fasterScroll = useTransform(scrollY, [0, 1000], [0, -100]);

    const details: string = navigator.userAgent;

    const regexp: RegExp = /android|iphone|kindle|ipad/i;

    const isMobileDevice: boolean = regexp.test(details);

    if (isMobileDevice) {
        return (
            <body style={{ width: '100%', overflowX: 'hidden' }}>
            <div className="area">
                <motion.ul
                    className="circles"
                    style={{ y: fasterScroll }}
                >
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </motion.ul>
            </div>
            <div className="context">
                <Navbar />
                <BoltUBCTitleMobile />
                <SponsorsMobile />
                <OurMissionMobile />
                <div style={{ height: '50px' }}></div>
                <EventsMobile />
                <div style={{ height: '100px' }}></div>
            </div>
            </body>
        );
    } else {
        return (
            <body>
            <div className="area">
                <motion.ul
                    className="circles"
                    style={{ y: fasterScroll }}
                >
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </motion.ul>
            </div>
            <div className="context">
                <Navbar />
                <BoltUBCTitle />
                <Sponsors />
                <OurMission />
                <div style={{ height: '100px' }}></div>
                <Events />
            </div>
            </body>
        );
    }
}

export default Home;