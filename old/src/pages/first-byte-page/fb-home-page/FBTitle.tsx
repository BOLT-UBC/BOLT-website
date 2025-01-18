import { FC } from "react";
import "./FBTitle.css";

const FBTitle: FC = () => {
  return (
    <>
      <div className="fb-title">
        <img className="fb-logo" src="/assets/first-byte/fb-logo.png" />
        <div className="fb-name">
          <h1>FIRST</h1>
          <h1>BYTE</h1>
        </div>
      </div>
    </>
  );
};
export default FBTitle;
