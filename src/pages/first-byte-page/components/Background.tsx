import { FC } from "react";
import "./Background.css";
import TempBackground from "/assets/background-images/TempBackground.jpg";

const Background: FC = () => {
  return (
    <>
      <div className="fb-overlay" />
      <div
        className="fb-background"
        style={{ backgroundImage: `url(${TempBackground})` }}
      />
    </>
  );
};
export default Background;
