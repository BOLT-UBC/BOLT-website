import { FC } from "react";
import "./Banner.css";
import { useEffect, useState } from "react";

const Banner: FC = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isVisible = visible ? "visible" : "hide";

  return (
    <nav className={`fb-banner ${isVisible}`}>
      <a className="banner-text" href="/firstbyte">
        Info
      </a>
      <a className="banner-text" href="/Judges">
        Judges
      </a>
      <a className="banner-text" href="/">
        Home
      </a>
    </nav>
  );
};

export default Banner;
