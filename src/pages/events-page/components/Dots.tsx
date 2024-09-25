import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styles from "./dots.module.css";

interface DotsProps {
    style: React.CSSProperties;
}

const Dots: FC<DotsProps> = ({ style }) => {
    return (
        <motion.div style={style} className={styles.dots}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, scale: 0.75 },
                        hidden: { opacity: 0, scale: 0.5 }
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'backInOut',
                    }}
                    exit={{
                        opacity: '0',
                        scale: 0.5
                    }}
        >
            <motion.div className={styles.dotsInner}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0.5 }
                        }}
                        transition={{
                            duration: 0.9,
                            ease: 'backInOut',
                        }}
                        exit={{
                            opacity: '0',
                            scale: 0.5
                        }}>

            </motion.div>
        </motion.div>
    );
}

export default Dots;