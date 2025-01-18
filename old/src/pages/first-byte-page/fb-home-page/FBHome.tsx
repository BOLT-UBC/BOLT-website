import { FC } from "react";
import FBTitle from "./FBTitle";
import Window from "../components/Window";
import UsefulLink from "./UsefulLinks";
import Folder from "../components/Folder";
import Schedule from "./Schedule";
import "./FBHome.css";

const FBHome: FC = () => {
  return (
    <div className="fb-container">
      <div className="fb-column-left">
        <FBTitle />
        <Window
          windowName="Useful Links"
          styles={{ width: "100%", height: "100%" }}
          classNames="fb-window"
        >
          <div className="links-frame">
            <UsefulLink
              thumbnail="/assets/first-byte/usefullinks/useful1.png"
              title="General DSCI Guide"
              link="https://python.datasciencebook.ca/viz.html"
            />
            <UsefulLink
              thumbnail="/assets/first-byte/usefullinks/useful2.png"
              title="Pandas Documentation"
              link="https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html"
            />
            <UsefulLink
              thumbnail="/assets/first-byte/usefullinks/useful3.png"
              title="Visualization Guide"
              link="https://www.geeksforgeeks.org/data-visualization-with-python/"
            />
            <UsefulLink
              thumbnail="/assets/first-byte/usefullinks/useful4.png"
              title="Case Comp Tips"
              link="https://www.efinancialmodels.com/winning-presentations-creating-an-impactful-case-comp-slide-deck/"
            />
            <UsefulLink
              thumbnail="/assets/first-byte/usefullinks/useful6.png"
              title="Public Speaking Tips"
              link="https://www.youtube.com/watch?v=-FOCpMAww28"
            />
            <UsefulLink
              thumbnail="/assets/first-byte/usefullinks/useful5.png"
              title="Slide Deck Tips"
              link="https://www.youtube.com/c/TheAnalystAcademy"
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
              folderLink="/assets/first-byte/first byte case package.zip"
            ></Folder>
          </div>
          <div className="fb-half">
            <Folder
              folderName="HA491"
              folderLogo="/assets/first-byte/fb-location-sprite.png"
              folderLink="https://www.google.com/maps/place/UBC+Sauder+School+of+Business/@49.2648239,-123.2537939,16z/data=!3m1!4b1!4m6!3m5!1s0x548672b5db6faaeb:0x7d0e6eae5fc5e75!8m2!3d49.2648239!4d-123.2537939!16zL20vMDhydHh5?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
            ></Folder>
          </div>
        </div>
        <Window
          windowName="Schedule"
          styles={{ width: "100%" }}
          classNames="fb-window schedule-display"
        >
          <Schedule />
        </Window>
      </div>
    </div>
  );
};

export default FBHome;
