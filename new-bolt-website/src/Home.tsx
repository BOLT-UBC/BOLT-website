import React from "react";
import Title from "./sections/Title";
import About from "./sections/About.tsx";
import Events from "./sections/Events.tsx";
import Sponsors from "./sections/Sponsors.tsx";
import Team from "./sections/Team.tsx";
import Navbar from "./components/Navbar.tsx";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Title />
        <About />
      </div>
      <Sponsors />

      <Events />
      <Team />
    </>
  );
};

export default Home;
