import { motion, useTransform, useViewportScroll } from 'framer-motion';
import BoltUBCTitle from './components/BoltUBCTitle.tsx';
import Sponsors from './components/Sponsors.tsx';
// import Events from "./components/Events.tsx";
import OurMission from "./components/OurMission.tsx";

import './style.css';

import {FC} from "react";
import Navbar from "../../global-components/Navbar.tsx";

const Home: FC = () => {
    const { scrollY } = useViewportScroll();

    const fasterScroll = useTransform(scrollY, [0, 1000], [0, -100]);

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
                <Sponsors/>
                <OurMission />
                <div style={{ height: '100px' }}></div>
            </div>
            </body>
        );
    }


export default Home;