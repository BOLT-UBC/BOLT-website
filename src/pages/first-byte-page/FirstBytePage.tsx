import { FC } from "react";
import "./styles.css";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Window from "./components/Window";
import Folder from "./components/Folder";
import Button from "./components/Button";

//fb stands for first-byte
const FirstBytePage: FC = () => {
  return (
    <div className="fb-body">
      <Banner />
      <Background />
      <Window
        windowName="Window Name!"
        styles={{ width: "600px", height: "400px" }}
      >
        <p>This window has custom width and height.</p>
      </Window>
      <div className="fb-sponsors">
        <Folder
          sponsorName="mastercard"
          sponsorLogo="https://media.discordapp.net/attachments/859197594831552542/1296256765914120192/image.png?ex=6711a0b0&is=67104f30&hm=756467d14d2fbabd2494a0f4cfa8769cad9f67e8db7dea38c71c62976bed9991&=&format=webp&quality=lossless&width=712&height=471"
        ></Folder>
      </div>
      <Button buttonText="Apply Now" buttonRedir="#about" />
    </div>
  );
};
export default FirstBytePage;
