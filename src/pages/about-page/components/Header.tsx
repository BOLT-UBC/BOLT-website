import Navbar from '../../../global-components/Navbar';
import "./styles.css";
import "../styles.css";
import logo from '../../../../app/bolt.png';
// import FadeShapes from "../../../global-components/FadeShapes.tsx";
import { motion } from "framer-motion"
import { ReactNode } from 'react';
import Image from 'next/Image';

interface HeaderProps {
    title: ReactNode;
    titleLineOne: ReactNode;
    titleLineTwo: ReactNode;
}

function Header(props: HeaderProps) {
    return (
        <div className="body-header">
            {/*<FadeShapes />*/}
            <div className="title-text-block">
                <div className='header-text'>
                    <div className="header">
                        <motion.div
                            className="header"
                            initial={{ x: -200 }}
                            animate={{ x: 10 }}
                            transition={{ duration: 1.5, type: "spring" }}>
                            <Image src={logo} alt="Logo" width={25} height={40} />
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
            <Navbar />
        </div >
    );
}

export default Header;