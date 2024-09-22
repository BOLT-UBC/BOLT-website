import { FC } from 'react';
import { motion } from 'framer-motion';
import Dots from "./Dots.tsx";
import Dates from './Dates.tsx';
import Info from './Info.tsx'
import styles from "./timeline.module.css";
import { events } from '../EventsData';

const Timeline: FC = () => {
    return (
        <div className="everything">
            <div>
                <motion.div className={styles.line}
                            initial={{
                                height: '0px'
                            }}
                            animate={{
                                height: 2400,
                            }}
                            transition={{
                                duration: 1,
                                ease: 'backInOut',
                            }}
                            exit={{
                                opacity: '0',
                            }}
                >
                </motion.div>
            </div>

            <div style={{position: 'absolute', top: 0, width: '100%', height: '100%'}}>
                {events.map((event: { date: string; image: string; title: string; description: string; }, index: number) => (
                    <div key={index}>
                        <Dots style={{ position: 'relative', top: '300px' }} />
                        <Dates multiplyer={300 - 58} date={event.date} />
                        <Info multiplyer={300 - 58} image={event.image} title={event.title} description={event.description} />
                        <div style={{ height: '300px', width: '100%' }}></div>
                    </div>
                ))}
            </div>
            <div style={{ height: '500px', width: '100%' }}></div>
        </div>
    );
}

export default Timeline;