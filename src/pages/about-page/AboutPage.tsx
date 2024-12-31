import { FC } from 'react';
import './styles.css';
import { motion } from "framer-motion";
import antarip from "/assets/profile-photos/Antarip-bg-removed.png";
import bradely from "/assets/profile-photos/Bradley-no-bg.png";
import TeamsPage from './components/TeamsPage.tsx'
import Header from "./components/Header.tsx";

const AboutPage: FC = () => {
    const isVisible: boolean = true;

    return (
        <div className="about-body header-body">
            <Header title="About Us" titleLineOne="Meet the 2024/2025" titleLineTwo="Bolt Family." />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ scale: 1.01 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.75 }}
            >
                {/* center big circle */}
                <motion.div
                    initial={{
                        opacity: '0'
                    }}
                    animate={{
                        width: '700px',
                        height: '700px',
                        opacity: '1'
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    style={{
                        translateY: '-50%',
                        top: '350px',
                        left: '55%',
                        translateX: '-50%',
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: '#FBF4FF',
                        width: '500px',
                        height: '500px',
                        zIndex: '-10',
                    }}
                    className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
                >
                </motion.div>

                {/* right small circle */}
                <motion.div
                    initial={{
                        opacity: '0'
                    }}
                    animate={{
                        width: '200px',
                        height: '200px',
                        opacity: '1'
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    style={{
                        translateY: '-10%',
                        top: '300px',
                        right: '12%',
                        translateX: '-10%',
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: '#F5E7FF',
                        width: '10px',
                        height: '10px',
                        zIndex: '-1',
                    }}
                    className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
                >
                </motion.div>

                {/* left medium circle */}
                <motion.div
                    initial={{
                        opacity: '0'
                    }}
                    animate={{
                        width: '400px',
                        height: '400px',
                        opacity: '1'
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                    }}
                    style={{
                        translateY: '-50%',
                        top: '210px',
                        left: '30%',
                        translateX: '-50%',
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: '#E5D4FF',
                        width: '300px',
                        height: '300px',
                        zIndex: '-10',
                    }}
                    className={isVisible ? 'fade-in-bottom visible ' : ' fade-in-bottom'}
                >
                </motion.div>
                <div className="word-from-pres">
                    <div className='pres-bg-container'>
                        <div className='pres-bg'>
                            <img src={bradely} className="pres-image" alt="pres-image" />
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ x: 50, opacity: 1 }}
                                transition={{ delay: 0, duration: 1.25 }}
                                className="pres-text">
                                Bradely Wong
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ x: 50, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 1.25 }}
                                className="pres-text">
                                - Co-President
                            </motion.h3>
                        </div>
                        <div className='pres-bg' style={{ transform: 'scaleX(-1)'}}>
                            <img src={antarip} className="pres-image image-flipped" alt="pres-image"/>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ x: 50, opacity: 1 }}
                                transition={{ delay: 0, duration: 1.25 }}
                                className="pres-text pres-text-right">
                                Antarip Kashyap
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ x: 50, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 1.25 }}
                                className="pres-text pres-text-right">
                                Co-President -
                            </motion.h3>
                        </div>
                    </div>
                    <div className='pres-message'>
                        "When I first joined BOLT UBC, I had no knowledge about data analytics or the community at BOLT. Now here I am in the middle of my journey in the data analytical world with the best community anyone could ask for."
                    </div>
                </div>
            </motion.div>
            <div className='header-body'>
                <TeamsPage />
            </div>
        </div >
    );
}

export default AboutPage;