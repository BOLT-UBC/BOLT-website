import { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';
import styles from "./dates.module.css";
import "../styles.css";

interface DatesProps {
    multiplyer: number;
    date: string;
}

const Dates: FC<DatesProps> = ({ multiplyer, date }) => {
    const [fontSize, setFontSize] = useState<string>('45px'); // Default font size

    // Effect to update font size based on window width
    useEffect(() => {
        const handleResize = () => {
            // Adjust font size based on window width
            setFontSize(window.innerWidth <= 750 ? '25px' : '35px');
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const posY: string = String(multiplyer + 15) + 'px';
    const posYN: string = String(multiplyer - 50) + 'px';
    return (
        <motion.div className={styles.dates}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={{
                        visible: { opacity: 1, top: posY },
                        hidden: { opacity: 0, top: posYN }
                    }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: 'backInOut'
                    }}
                    exit={{
                        opacity: '0',
                        top: posYN,
                        scale: 0
                    }}
        >
            <p className="date-p" style={{ margin: 0, position: 'relative', left: '30px', fontSize: fontSize }}>{date}</p>
        </motion.div>
    );
}

export default Dates;