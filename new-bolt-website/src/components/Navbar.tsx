import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const sections = ["Home", "About", "Sponsors", "Events", "Team"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 60; // Add 100px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={styles.navButton}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
