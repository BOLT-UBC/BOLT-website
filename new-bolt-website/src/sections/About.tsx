import React from 'react';
import styles from './About.module.css';
import clouds from '../assets/images/CloudsLong.png'
import mountainImage from '../assets/images/left-mountain.png';
import mountainImage2 from '../assets/images/right-mountain.png';
import stars from '../assets/images/Stars.png';
import { Parallax } from 'react-scroll-parallax';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>ABOUT US</h1>
      <p className={styles.description}>
        Bolt provides an enriching platform that fosters collaboration, presents intellectually stimulating challenges, and facilitates hands-on experiences. This unique opportunity is open to students from diverse backgrounds, inviting them to immerse themselves in the dynamic realm of business technology.
      </p>
      <img
        src={mountainImage}
        alt="Left Mountain"
        className={styles.mountainImage}
      />
      <img
        src={mountainImage2}
        alt="Right Mountain"
        className={styles.mountainImage2}
      />
      <Parallax className={styles.cloudsParallax} translateX={[-33, -70]}>
        <img
          src={clouds}
          alt="Clouds"
          className={styles.clouds}
        />
      </Parallax>
      <img
        src={stars}
        alt="Stars"
        className={styles.stars}
      />
    </div>
  );
};

export default About;
