import { FC } from "react";
import Window from "../components/Window";
import "./JudgeCard.css";
import DecoratedNameBar from "../components/DecoratedNameBar";

export interface iJudge {
  name: string;
  description: string;
  pixelProfilepic: string;
  realProfilepic: string;
}

const JudgeCard: FC<iJudge> = ({
  name,
  description,
  pixelProfilepic,
  realProfilepic,
}) => {
  return (
    <div className="judge-card">
      <Window windowName="Judges" styles={{ height: "480px", width: "416px" }}>
        <div className="judge-card-content">
          <DecoratedNameBar
            name={name}
            styles={{
              height: "36px",
              width: "90%",
              marginTop: "1.2rem",
              fontSize: "1.6rem",
            }}
          />
          <div className="judge-pfp-container">
            <div className="judge-pfp-spinner">
              <img
                className="judge-pfp-front"
                src={pixelProfilepic}
                alt={`Judge ${name} Pixel PFP`}
              />
              <img
                className="judge-pfp-back"
                src={realProfilepic}
                alt={`Judge ${name} Real PFP`}
              />
            </div>
          </div>
          <div className="judge-description">{description}</div>
        </div>
      </Window>
    </div>
  );
};

export default JudgeCard;
