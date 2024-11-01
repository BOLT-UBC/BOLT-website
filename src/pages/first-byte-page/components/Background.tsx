import { FC } from "react";
import "./Background.css";
import TempBackground from "../../../../public/assets/background-images/TempBackground.jpg";
import Image from "next/Image";

const Background: FC = () => {
  return (
    <>
      <div className="fb-overlay" />
      <div className="fb-background">
        <Image 
            src="/assets/background-images/TempBackground.jpg" 
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
      </div>
    </>
  );
};
export default Background;
