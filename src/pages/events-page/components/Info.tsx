import { motion } from "framer-motion";
import img1 from 'assets/images/1.jpg';
import img2 from 'assets/images/2.jpg';
import img3 from 'assets/images/3.jpg';
import img4 from 'assets/images/4.jpg';
import img5 from 'assets/images/5.jpg';
import img6 from 'assets/images/6.jpg';
import img7 from 'assets/images/7.png';
import img8 from 'assets/images/8.png';
import styles from "./info.module.css";

interface InfoProps {
    image: string;
    description: string;
    multiplyer: number;
    title: string;
}

function Info({ image, description, multiplyer, title }: InfoProps): JSX.Element {
    let img: string = '';
    switch (image) {
        case "1":
            img = img1;
            break;
        case "2":
            img = img2;
            break;
        case "3":
            img = img3;
            break;
        case "4":
            img = img4;
            break;
        case "5":
            img = img5;
            break;
        case "6":
            img = img6;
            break;
        case "7":
            img = img7;
            break;
        case "8":
            img = img8;
            break;
    }

    const posY: string = String(multiplyer + 15) + 'px';
    return (
        <div className={styles.positioning}>
            <div className='positioning2'
                 style={{
                     position: 'relative',
                     top: posY,
                     display: 'flex',
                 }}
            >
                <div className={styles.infoImg}>

                    <motion.div className={styles.imgBorder}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={{
                                    visible: { opacity: 1, left: '0' },
                                    hidden: { opacity: 0, left: '-20px' }
                                }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.2,
                                    ease: 'easeIn'
                                }}
                                exit={{
                                    opacity: '0',
                                }}
                    >
                        <img src={img} style={{ width: '100%' }} className={styles.leftImage} />
                    </motion.div>
                    <motion.div className={styles.contentBorder}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                variants={{
                                    visible: { opacity: 1, left: '0' },
                                    hidden: { opacity: 0, left: '-20px' }
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.3,
                                    ease: 'easeIn'
                                }}
                                exit={{
                                    opacity: '0',
                                }}
                    >
                        <div className={styles.info}>
                            <h1 className={styles.infoH}>{title}</h1>
                            <p className={styles.infoP}>{description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Info;