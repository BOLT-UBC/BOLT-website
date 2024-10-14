import { FC } from "react";
import "./styles.css";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Window from "./components/Window";

//fb stands for first-byte
const FirstBytePage: FC = () => {
  return (
    <div className="fb-body">
      <Banner />
      <Background />
      <Window windowName="Window Name!">
        <div></div>
      </Window>
    </div>
  );
};
export default FirstBytePage;
