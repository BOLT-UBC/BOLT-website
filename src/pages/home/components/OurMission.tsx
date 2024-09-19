import { FC, useState, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styles from './our-mission.module.css';
import dog from '../../../assets/logos/bolt_dog_no_background.png';

const OurMission: FC = () => {
    const { scrollY } = useViewportScroll();

    const fasterScroll = useTransform(scrollY, [0, 1000], [0, -100]);
    const slowerScroll = useTransform(scrollY, [0, 1000], [0, 300]);

    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const element = document.getElementById('fadeInElement');
            if (element) {
                const topPosition: number = element.getBoundingClientRect().top;
                const windowHeight: number = window.innerHeight;
                setIsVisible(topPosition < windowHeight - 900);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.MissionContentBorder}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', y: slowerScroll }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {isVisible && (
                        <motion.div
                            initial={{
                                opacity: '0.9',
                                scale: '0'
                            }}
                            animate={{
                                scale: '1',
                                opacity: '1'
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                            className={isVisible ? `fade-in-bottom visible ${styles.MissionBackground1}` : `fade-in-bottom ${styles.MissionBackground1}`}
                        >
                        </motion.div>
                    )}
                    {isVisible && (
                        <motion.div
                            initial={{
                                opacity: '0'
                            }}
                            animate={{
                                width: '500px',
                                height: '500px',
                                opacity: '1'
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                            className={isVisible ? `fade-in-bottom visible ${styles.MissionBackground2}` : `fade-in-bottom ${styles.MissionBackground2}`}
                        >
                        </motion.div>
                    )}
                </div>
            </div>
            <div style={{ width: '85%', margin: '0 auto', y: fasterScroll }}>
                <div style={{ display: 'flex' }}>
                    <h1 className={isVisible ? `fade-in-left visible ${styles.missionTitle}` : `fade-in-left ${styles.missionTitle}`}>Our Mission</h1>
                    <img src={dog} className={isVisible ? `fade-in-bottom visible ${styles.missionDog}` : `fade-in-bottom ${styles.missionDog}`} />
                    {isVisible && (
                        <motion.div
                            initial={{
                                position: 'relative',
                                left: '-1000px',
                                opacity: '0'
                            }}
                            animate={{
                                left: '-200px',
                                opacity: '1'
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: 'backInOut',
                            }}
                            className={styles.missionDot}
                        >
                        </motion.div>
                    )}
                </div>
                <p className={isVisible ? `fade-in-top visible ${styles.missionContent}` : `fade-in-top ${styles.missionContent}`}>Bolt provides an enriching platform that fosters collaboration, presents intellectually stimulating challenges, and facilitates hands-on experiences. This unique opportunity is open to students from diverse backgrounds, inviting them to immerse themselves in the dynamic realm of business technology.</p>
            </div>
        </div>
    );
}

export default OurMission;