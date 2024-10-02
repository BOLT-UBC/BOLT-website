import { FC } from "react";
import "./styles.css";
import Background from "./components/Background";
import Banner from "./components/Banner";

//fb stands for first-byte
const FirstBytePage: FC = () => {
  return (
    <div className="fb-body">
      <Banner />
      <Background />
    </div>
  );
};
export default FirstBytePage;
