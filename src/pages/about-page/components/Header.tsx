import Navbar from '../../../global-components/Navbar.tsx';
import "./styles.css";
import "../styles.css";
import logo from '../../../../public/assets/logos/bolt.png';
import FadeShapes from "../../../global-components/FadeShapes.tsx";
import { motion } from "framer-motion"
import { ReactNode } from 'react';

interface HeaderProps {
    title: ReactNode;
    titleLineOne: ReactNode;
    titleLineTwo: ReactNode;
}

function Header(props: HeaderProps) {
    return (
        <div className="body-header">
            <div className="title-text-block">
                <div className='header-text'>
                    <div className="header">
                        <motion.div
                            className="header"
                            initial={{ x: -200 }}
                            animate={{ x: 10 }}
                            transition={{ duration: 1.5, type: "spring" }}>
                            <img className="bolt-logo" src={logo} />
                            <div className="title">
                                {props.title}
                            </div>
                        </motion.div>
                    </div>
                    <div className="title-text one">
                        {props.titleLineOne}
                    </div>
                    <div className="title-text">
                        {props.titleLineTwo}
                    </div>
                </div>
            </div>
            <FadeShapes />
            <Navbar />
        </div >
    );
}

export default Header;