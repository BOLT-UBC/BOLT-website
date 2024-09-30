import { motion } from 'framer-motion';
import styles from './events.module.css';

import img1 from 'assets/images/1.jpg';
import img2 from 'assets/images/1.jpg';
import img3 from 'assets/images/1.jpg';

function EventsMobile() {
    return (
        <div className={styles.eventsBorderMobile}>
            <motion.h1
                className={styles.OurEventsMobile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 20 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 0.5,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >
                Our Events
            </motion.h1>

            <motion.div
                className={styles.mobileEventTile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 10 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >
                <div className={styles.eventImgMobile}>
                    <img src={img1} style={{ width: '100%' }} />
                </div>
                <div className={styles.eventContentMobile}>
                    <div>
                        <h2 style={{ marginBottom: 3 }}>Bolt Connect</h2>
                        <p style={{ margin: '0' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                        </p>
                    </div>
                </div>
            </motion.div>
            <div style={{ height: '15px' }}></div>
            <motion.div
                className={styles.mobileEventTile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 10 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >
                <div className={styles.eventImgMobile}>
                    <img src={img2} style={{ width: '100%' }} />
                </div>
                <div className={styles.eventContentMobile}>
                    <div>
                        <h2 style={{ marginBottom: 3 }}>Data Beyond</h2>
                        <p style={{ margin: '0' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                        </p>
                    </div>
                </div>
            </motion.div>
            <div style={{ height: '15px' }}></div>
            <motion.div
                className={styles.mobileEventTile}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                    visible: { opacity: 1, left: 10 },
                    hidden: { opacity: 0, left: '-50px' }
                }}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
                exit={{
                    opacity: '0',
                    left: '0'
                }}
            >
                <div className={styles.eventImgMobile}>
                    <img src={img3} style={{ width: '100%' }} />
                </div>
                <div className={styles.eventContentMobile}>
                    <div>
                        <h2 style={{ marginBottom: 3 }}>First Byte</h2>
                        <p style={{ margin: '0' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default EventsMobile;