import { FC, useState, useEffect } from "react";
import JudgeCard from "./JudgeCard";
import { iJudge } from "./JudgeCard";
import "./Judges.css";

const Judges: FC = () => {
  const [judgesInfo, setJudgesInfo] = useState<iJudge[] | null>(null);

  useEffect(() => {
    fetch("/assets/judges/judgesinfo.json")
      .then((response) => response.json())
      .then((data) => setJudgesInfo(data))
      .catch((error) => console.error("Error fetching judges info:", error));
  }, []);

  if (!judgesInfo) {
    return <div className="windows">Loading...</div>;
  }

  return (
    <div className="judges">
      {judgesInfo?.map((judge, index) => (
        <JudgeCard
          key={index}
          name={judge.name}
          description={judge.description}
          pixelProfilepic={judge.pixelProfilepic}
          realProfilepic={judge.realProfilepic}
        />
      ))}
    </div>
  );
};

export default Judges;
