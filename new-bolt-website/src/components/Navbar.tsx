import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const sections = ["Home", "About", "Sponsors", "Events", "Team"];
  const [activeSection, setActiveSection] = useState("Home");
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 200 &&
            scrollPosition < offsetTop + offsetHeight - 200
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      isScrolling.current = true;
      const offsetPosition = element.offsetTop - 60;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
        setActiveSection(sectionId);
      }, 700);
    }
  };

  return (
    <nav className={styles.navbar}>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`${styles.navButton} ${
            activeSection === section ? styles.active : ""
          }`}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
