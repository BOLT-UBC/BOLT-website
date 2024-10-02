import { FC } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styles from './bolt-ubc-title.module.css';
import logo from '/assets/logos/bolt_dog.png';

const BoltUBCTitle: FC = () => {
    const { scrollY } = useViewportScroll();
    useTransform(scrollY, [0, 1000], [0, 450]);

    return (
        <div className={styles.BoltUBCBorder}>
            <div className={styles.homeContainer}>
                <img src={logo} className={styles.main_dog_image} alt="Bolt Dog Logo" /> 
                <div className={styles.pageRightContainer}>
                    <h1 className={styles.ubc}><span className={styles.bolt}>BOLT</span> UBC</h1>
                    <p className={styles.catchPhrase}>Unleash the power of data analytics!</p>
                    <button className={styles.memberButton}>become a member</button>
                </div>
            </div>
        </div>
    );
}

export default BoltUBCTitle;