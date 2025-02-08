import React from 'react';
import Title from './sections/Title';
import About from './sections/About.tsx';
import Events from './sections/Events.tsx';
import Sponsors from './sections/Sponsors.tsx';
import Team from './sections/Team.tsx';
import styles from "./Home.module.css"

const Home: React.FC = () => {
  return <div className={styles.page}>
            <Title />
            <div className={styles.assetWrapper}>
              <About />
              <div className={styles.sponsorsWrapper}>
                <Sponsors />
                <Events />
              </div>
            </div>
            <Team />
        </div>;
};

export default Home;