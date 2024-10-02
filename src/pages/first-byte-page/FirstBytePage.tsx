import { FC } from "react";
import "./styles.css";
import Background from "./components/Background";

//fb stands for first-byte
const FirstBytePage: FC = () => {
  return (
    <div>
      <div className="fb-body"></div>
      <Background />
    </div>
  );
};
export default FirstBytePage;
