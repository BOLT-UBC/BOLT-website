import React from "react";
import styles from "./About.module.css";
import clouds from "../assets/images/CloudsLong.webp";
import moon from "../assets/images/Moon.webp";
import mountainImage from "../assets/images/left-mountain.webp";
import mountainImage2 from "../assets/images/right-mountain.webp";
import stars from "../assets/images/Stars.webp";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";
import { PARALLAX } from "../constants/layout";

const About: React.FC = () => {
  return (
    <div className={styles.about} id="About">
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>ABOUT US</h1>
        <p className={styles.description}>
          Bolt provides an enriching platform that fosters collaboration,
          presents intellectually stimulating challenges, and facilitates
          hands-on experiences. This unique opportunity is open to students from
          diverse backgrounds, inviting them to immerse themselves in the
          dynamic realm of business technology.
        </p>
      </div>
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
      {!isMobile && (
        <>
          <Parallax
            className={styles.moonParallax}
            translateX={PARALLAX.moon.translateX}
            translateY={PARALLAX.moon.translateY}
          >
            <img
              src={moon}
              alt="Moon"
              className={styles.moon}
              draggable="false"
            />
          </Parallax>

          <Parallax
            className={styles.cloudsParallax}
            translateX={PARALLAX.clouds.translateX}
          >
            <img
              src={clouds}
              alt="Clouds"
              draggable="false"
              className={styles.clouds}
            />
          </Parallax>
          <Parallax
            className={styles.starsParallax}
            rotate={PARALLAX.stars.rotate}
            translateX={PARALLAX.stars.translateX}
            translateY={PARALLAX.stars.translateY}
          >
            <img
              src={stars}
              alt="Stars"
              draggable="false"
              className={styles.stars}
            />
          </Parallax>
        </>
      )}
    </div>
  );
};

export default About;
