import React from "react";
import Title from "./sections/Title/Title";
import About from "./sections/About/About";
import Sponsors from "./sections/Sponsors/Sponsors";
import Events from "./sections/Events/Events";
import Team from "./sections/Team/Team";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Title />
      <About />
      <Sponsors />
      <Events />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
