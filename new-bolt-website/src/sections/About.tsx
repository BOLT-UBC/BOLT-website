import React from 'react';
import styles from './About.module.css';

const brief = "UBC BOLT is a professional community for students passionate about data analytics and business intelligence. We host hands-on workshops, case competitions, and industry events that challenge members to apply their skills in real-world scenarios."

const About: React.FC = () => {
  return (
    <section className={styles.About}>
      {/* Background */}
      <img
        src="/assets/moon.svg"
        alt="moon"
        className={styles.moon}
      />
      <img
        src="/assets/clouds-fg.svg"
        alt="cloud"
        className={styles.cloudsFg}
      />
      {/* <img
        src="/assets/clouds-bg.svg"
        alt="cloud"
        className={styles.cloudsBg}
      /> */}

      {/* Content */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>ABOUT US</h2>
        <p className={styles.introText}>
          <span className={styles.subheadingText}>UBC's largest data analytics club</span><br/>
          {brief}
        </p>
      </div>
    </section>
  );
};

export default About;
