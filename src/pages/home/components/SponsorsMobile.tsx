import { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';
import styles from './sponsors.module.css';
import ams from '/public/assets/sponsors/ams.png';
import cus from '/public/assets/sponsors/cus.png';
import mastercard from '/public/assets/sponsors/mastercard.png';
import CPABC from '/public/assets/sponsors/CPABC.png';
import uoft from '/public/assets/sponsors/uoft.png';

const SponsorsMobile: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const element = document.getElementById('fadeInElement');
            if (element) {
                const topPosition: number = element.getBoundingClientRect().top;
                const windowHeight: number = window.innerHeight;
                setIsVisible(topPosition < windowHeight + 50);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return (): void => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '90%', position: 'relative', top: '30px' }}>
            {isVisible && (
                <motion.div
                    initial={{
                        width: '40px',
                        height: '35px'
                    }}
                    animate={{
                        width: '250px',
                        padding: '10px'
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: 'backInOut',
                    }}
                    style={{
                        margin: '0 auto',
                        borderRadius: '500px',
                        backgroundColor: '#623CE8',
                        translateY: '-25%',
                        color: 'white',
                        textAlign: 'center',
                    }}
                >
                    {isVisible && (
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 1.1,
                                ease: 'backInOut',
                            }}
                            className={styles.becomeourpartner}>
                            <a href="mailto:boltubc@gmail.com" style={{ textDecoration: 'none', color: 'white' }}>Become a Partner</a>
                        </motion.p>
                    )}
                </motion.div>
            )}

            <motion.div id="fadeInElement" className={isVisible ? 'zoom-in visible' : 'zoom-in'}>
                <div className={styles.SponsorListMobile}>
                    <h1 style={{ color: '#454545' }}>Title Sponsor </h1>
                    <img src={mastercard} className={styles.mastercardStyleMobile} alt="Mastercard" />
                    <div style={{ height: '30px' }}></div>
                    <hr />
                    <h1 style={{ color: '#454545' }}>Sponsors </h1>
                    <img src={CPABC} className={styles.cpabcStyleMobile} alt="CPABC" />
                    <img src={uoft} className={styles.torontoStyleMobile} alt="University of Toronto" />
                    <div style={{ height: '20%' }}></div>
                    <h1 style={{ color: '#454545' }}>Affiliated </h1>
                    <img src={cus} className={styles.cusimgStyle} alt="CUS" />
                    <img src={ams} className={styles.amsStyleMobile} alt="AMS" />
                </div>
            </motion.div>
        </div>
    );
}

export default SponsorsMobile;