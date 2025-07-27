import React from "react";
import styles from "./About.module.css";
import clouds from "../assets/images/CloudsLong.webp";
import moon from "../assets/images/Moon.png";
import mountainImage from "../assets/images/left-mountain.png";
import mountainImage2 from "../assets/images/right-mountain.png";
import stars from "../assets/images/Stars.webp";
import { Parallax } from "react-scroll-parallax";

const About: React.FC = () => {
  return (
    <div className={styles.about} id="About">
      <h1 className={styles.title}>ABOUT US</h1>
      <p className={styles.description}>
        Bolt provides an enriching platform that fosters collaboration, presents
        intellectually stimulating challenges, and facilitates hands-on
        experiences. This unique opportunity is open to students from diverse
        backgrounds, inviting them to immerse themselves in the dynamic realm of
        business technology.
      </p>
      <Parallax
        className={styles.moonParallax}
        translateX={[-20, 20]}
        translateY={[-50, 50]}
      >
        <img src={moon} alt="Moon" className={styles.moon} draggable="false" />
      </Parallax>
      <img
        src={mountainImage}
        alt="Left Mountain"
        className={styles.mountainImage}
        draggable="false"
      />
      <img
        src={mountainImage2}
        alt="Right Mountain"
        className={styles.mountainImage2}
        draggable="false"
      />
      <Parallax className={styles.cloudsParallax} translateX={[-33, -70]}>
        <img
          src={clouds}
          alt="Clouds"
          draggable="false"
          className={styles.clouds}
        />
      </Parallax>
      <Parallax
        className={styles.starsParallax}
        rotate={[-30, 30]}
        translateX={[-20, 20]}
        translateY={[5, -5]}
      >
        <img
          src={stars}
          alt="Stars"
          draggable="false"
          className={styles.stars}
        />
      </Parallax>
    </div>
  );
};

export default About;
