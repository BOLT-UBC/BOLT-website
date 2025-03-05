import React from "react";
import "./Title.css";
import "../LandingPage.css";
import Rocket from "../../components/Rocket";
import LandingPageButton from "../../components/LandingPageButton";

import { useNavigate } from "react-router-dom";

export default function Title() {
  return (
    <div className="title-gradient">
      <div className="title-background">
        <Rocket targetDate="2025-03-05T12:00:00" />
        <div className="title-content">
          <h1>Bootcamp</h1>
          <h2>March 9-10, 2025 | BOLT UBC</h2>
          <h3>Thank you! Registration is now closed.</h3>
          <div className="button-container">
            {/* Replace with custom button component */}
            {/* <LandingPageButton text="Register Now" path="/registration" /> */}
            <LandingPageButton text="View Portal" path="/portal#dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
}
