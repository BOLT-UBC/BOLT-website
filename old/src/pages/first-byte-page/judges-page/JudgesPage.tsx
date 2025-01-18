import { FC } from "react";
import Background from "../components/Background";
import Banner from "../components/Banner";
import Judges from "./Judges";
const JudgesPage: FC = () => {
  return (
    <div className="fb-body">
      <Banner />
      <Judges />
      <Background />
    </div>
  );
};
export default JudgesPage;
