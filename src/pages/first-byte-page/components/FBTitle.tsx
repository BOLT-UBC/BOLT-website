import { FC } from "react";
import "./FBTitle.css";

const FBTitle: FC = () => {
  return (
    <>
      <div className="fb-title">
        <img className="fb-logo" src="/assets/first-byte/fb-logo.png" />
        <div className="fb-name">
          <h1>FIRST BYTE</h1>
        </div>
      </div>
    </>
  );
};
export default FBTitle;
