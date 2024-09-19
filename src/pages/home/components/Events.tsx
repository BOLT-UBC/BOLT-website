import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './events.module.css';

import img1 from '../../../assets/events/1.jpg';
import img3 from '../../../assets/events/3.jpg';
import img6 from '../../../assets/events/6.jpg';

const Events: FC = () => {
    return (
        <div className={styles.eventPageBorder}>
            <div className={styles.PaddingEvents}>
                <motion.h1
                    className={styles.OurEvents}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, left: 0 },
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
                >Our Events
                </motion.h1>
                <motion.div className={styles.eventBorder}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={{
                                visible: { opacity: 1, left: 0 },
                                hidden: { opacity: 0, left: '-50px' }
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                            exit={{
                                opacity: '0',
                                left: '0'
                            }}>
                    <div className={styles.eventImg}>
                        <img src={img1} style={{ width: '100%' }} alt='Bolt Connect' />
                    </div>
                    <div>
                        <p className={styles.eventTitle}>Bolt Connect</p>
                        <p className={styles.eventContent}>Get ready for 𝗕𝗢𝗟𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧 —your ultimate networking destination! Forge lasting professional connections and gain direct access to industry pros ranging from Data Engineers, Senior Analysts, to Data & AI Engineering Consultants. This is a great opportunity to get insights and explore career paths and expand your LinkedIn network!</p>
                    </div>
                </motion.div>
                <br />
                <motion.div className={styles.eventBorder}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={{
                                visible: { opacity: 1, left: 0 },
                                hidden: { opacity: 0, left: '-50px' }
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                            exit={{
                                opacity: '0',
                                left: '0'
                            }}>
                    <div className={styles.eventImg}>
                        <img src={img6} style={{ height: '100%' }} alt='November Workshop' />
                    </div>
                    <div>
                        <p className={styles.eventTitle}>November Workshop</p>
                        <p className={styles.eventContent}>Get ready for 𝗕𝗢𝗟𝗧 𝗠𝗮𝗿𝗸𝗲𝘁𝗶𝗻𝗴 𝗔𝗻𝗮𝗹𝘆𝘁𝗶𝗰𝘀 𝗪𝗼𝗿𝗸𝘀𝗵𝗼𝗽𝘀 — your destination for diving into the world of marketing analytics! This is a chance to gain direct access to industry pros ranging from Marketing Analysts, Digital Strategists, to Marketing Technology Specialists—get insights and explore career paths. Also, you can expand your professional network within the marketing analytics sphere</p>
                    </div>
                </motion.div>
                <br />
                <motion.div className={styles.eventBorder}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={{
                                visible: { opacity: 1, left: 0 },
                                hidden: { opacity: 0, left: '-50px' }
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                            exit={{
                                opacity: '0',
                                left: '0'
                            }}>
                    <div className={styles.eventImg}>
                        <img src={img3} style={{ height: '100%' }} alt='First Byte' />
                    </div>
                    <div>
                        <p className={styles.eventTitle}>First Byte</p>
                        <p className={styles.eventContent}>BOLT UBC presents '𝗙𝗶𝗿𝘀𝘁 𝗕𝘆𝘁𝗲 𝟮𝟬𝟮𝟯' - your gateway to the world of data analytics! Whether you're a newbie or just curious, this beginner-focused data analytics themed case competition is your chance to learn, connect, and compete!</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Events;