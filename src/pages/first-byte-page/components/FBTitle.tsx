import { FC } from "react";
import "./FBTitle.css";

const FBTitle: FC = () => {
  return (
    <>
      <div className="fb-title">
        <img className="fb-logo" src="/assets/logos/fb-logo.png" />
        <div className="fb-name">
          <h1>First Byte</h1>
        </div>
      </div>
    </>
  );
};
export default FBTitle;
