import { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';
import styles from './sponsors.module.css';
import ams from '/public/assets/sponsors/ams.png';
import cus from '/public/assets/sponsors/cus.png';
import mastercard from '/public/assets/sponsors/mastercard.png';
import CPABC from '/public/assets/sponsors/CPABC.png';
import uoft from '/public/assets/sponsors/uoft.png';
import logo from '/public/assets/logos/Right-Dark.png';

const Sponsors: FC = () => {
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
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '70%', position: 'relative', top: '30px' }}>
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
                            <a href="mailto:boltubc@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>Become a Partner</a>
                        </motion.p>
                    )}
                </motion.div>
            )}

            <motion.div id="fadeInElement" className={isVisible ? 'zoom-in visible' : ' zoom-in'}>
                <div className={styles.SponsorList}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible imgPadding' : ' fade-in-bottom imgPadding'}>
                            <img src={mastercard} className={styles.mastercardimgStyle} alt="Mastercard" />
                        </div>
                        <div style={{ width: '30px' }}></div>
                        <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible' : ' fade-in-bottom'}>
                            <p className={styles.parntership}> | </p>
                        </div>
                        <div style={{ width: '25px' }}></div>
                        <div id="fadeInElement" className={isVisible ? 'fade-in-bottom visible imgPadding' : ' fade-in-bottom imgPadding'}>
                            <img src={logo} className={styles.mastercardimgStyle} alt="Logo" />
                        </div>
                    </div>

                    <div className={styles.nonTitleSponsor}>
                        <img src={uoft} className={styles.uoftimgStyle} alt="UofT" />
                        <img src={CPABC} className={styles.mastercardimgStyle} alt="CPABC" />
                        <img src={ams} className={styles.amsimgStyle} alt="AMS" />
                        <img src={cus} className={styles.cusimgStyle} alt="CUS" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Sponsors;