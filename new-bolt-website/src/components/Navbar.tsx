import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const HamburgerIcon: React.FC = () => (
  <svg width="23" height="23" viewBox="0 0 23 23">
    <path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      stroke="white"
      style={{ transition: "stroke 0.3s" }}
      d="M 2 2.5 L 20 2.5"
    />
    <path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      stroke="white"
      d="M 2 9.423 L 20 9.423"
      style={{ transition: "stroke 0.3s" }}
      opacity="1"
    />
    <path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      stroke="white"
      style={{ transition: "stroke 0.3s" }}
      d="M 2 16.346 L 20 16.346"
    />
  </svg>
);

const Navbar: React.FC = () => {
  const sections = ["Home", "About", "Sponsors", "Events", "Team"];
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
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

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
      setMenuOpen(false);

      setTimeout(() => {
        isScrolling.current = false;
        setActiveSection(sectionId);
      }, 700);
    }
  };
  const HamburgerIcon = () => (
    <svg width="23" height="23" viewBox="0 0 23 23">
      <path
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        stroke="white"
        d="M 2 2.5 L 20 2.5"
      />
      <path
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        stroke="white"
        d="M 2 9.423 L 20 9.423"
      />
      <path
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        stroke="white"
        d="M 2 16.346 L 20 16.346"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg width="23" height="23" viewBox="0 0 23 23">
      <path
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        d="M 2 2 L 21 21"
      />
      <path
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        d="M 21 2 L 2 21"
      />
    </svg>
  );
  return (
    <nav className={styles.navbar}>
      <ul className={styles.desktopNav}>
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className={`${styles.navButton} ${
                activeSection === section ? styles.active : ""
              }`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
