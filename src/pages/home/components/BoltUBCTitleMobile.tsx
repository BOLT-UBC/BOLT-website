import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './bolt-ubc-title.module.css';
import logo from 'assets/logos/bolt_dog.png';

const BoltUBCTitleMobile: FC = () => {

    return (
        <div className={styles.MobileTitleBorder}>

            <img src={logo} className={styles.main_dog_image_mobile} alt='Bolt Dog Logo' />

            <h1 className={styles.BoltUBCTitle}><div style={{ color: '#623CE8', display: 'inline' }}>BOLT</div> UBC</h1>
            <p className={styles.BoltUBCCatchPhrase}>Unleash the power of data analytics</p>
            <motion.div
                initial={{
                    width: '40px',
                    height: '35px'
                }}
                animate={{
                    width: '250px',
                    padding: '10px'
                }}
                style={{
                    margin: '0 auto',
                    borderRadius: '500px',
                    backgroundColor: '#623CE8',
                    translateY: '440%',
                    color: 'white',
                    textAlign: 'center',
                }}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.25 },
                }}
                whileTap={{ scale: 0.8 }}>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 0.5,
                        ease: 'backInOut',
                    }}
                    className={styles.becomeourpartner}
                >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScGMtIY9xvBwmxM-29JsCiem7Mqpx6H7qAZCiVEq7i5amVK-w/viewform" style={{ color: 'white', textDecoration: 'none' }}>Become a Member!</a>
                </motion.p>
            </motion.div>
        </div>
    );
}

export default BoltUBCTitleMobile;