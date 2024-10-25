import { FC } from "react";
import "./styles.css";
import Background from "./components/Background";
import Banner from "./components/Banner";
import FBHome from "./fb-home-page/FBHome";

//fb stands for first-byte
const FirstBytePage: FC = () => {
  return (
    <div className="fb-body">
      <Banner />
      <Background />
      <FBHome />
    </div>
  );
};
export default FirstBytePage;
