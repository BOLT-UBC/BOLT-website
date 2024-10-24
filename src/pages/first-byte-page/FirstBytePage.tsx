import { FC } from "react";
import "./styles.css";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Window from "./components/Window";
import Folder from "./components/Folder";
import FBTitle from "./components/FBTitle";
import Schedule from "./components/Schedule";
import UsefulLink from "./components/UsefulLinks";

//fb stands for first-byte
const FirstBytePage: FC = () => {
  return (
    <div className="fb-body">
      <Banner />
      <Background />
      <div className="fb-container">
        <div className="fb-column-left">
          <FBTitle />
          <Window
            windowName="Useful Links"
            styles={{ width: "100%", height: "366px" }}
          >
            <div className="links-frame">
              <UsefulLink
                thumbnail="/assets/background-images/TempBackground.jpg"
                title="I am resouce 1"
                link="https://www.google.com"
              />
              <UsefulLink
                thumbnail="/assets/background-images/TempBackground.jpg"
                title="Blah Blah Blah"
                link="https://www.google.com"
              />
              <UsefulLink
                thumbnail="/assets/background-images/TempBackground.jpg"
                title="What the sigma"
                link="https://www.google.com"
              />
              <UsefulLink
                thumbnail="/assets/background-images/TempBackground.jpg"
                title="Just think about it"
                link="https://www.google.com"
              />
              <UsefulLink
                thumbnail="/assets/background-images/TempBackground.jpg"
                title="How are you doing"
                link="https://www.google.com"
              />
              <UsefulLink
                thumbnail="/assets/background-images/TempBackground.jpg"
                title="Whats good bro"
                link="https://www.google.com"
              />
            </div>
          </Window>
        </div>
        <div className="fb-column-right">
          <div className="fb-redirect-row">
            <div className="fb-half">
              <Folder
                folderName="Case Package"
                folderLogo="/assets/first-byte/fb-logo.png"
                folderLink="https://www.google.com"
              ></Folder>
            </div>
            <div className="fb-half">
              <Folder
                folderName="2053 Main Mall"
                folderLogo="/assets/first-byte/fb-location-sprite.png"
                folderLink="https://www.google.com/maps/place/UBC+Sauder+School+of+Business/@49.2648239,-123.2537939,16z/data=!3m1!4b1!4m6!3m5!1s0x548672b5db6faaeb:0x7d0e6eae5fc5e75!8m2!3d49.2648239!4d-123.2537939!16zL20vMDhydHh5?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
              ></Folder>
            </div>
          </div>
          <Window
            windowName="Schedule"
            styles={{ width: "100%", height: "100%" }}
          >
            <Schedule />
          </Window>
        </div>
      </div>
    </div>
  );
};
export default FirstBytePage;
