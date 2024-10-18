import { FC } from "react";
import "./Folder.css";

interface FolderProps {
  sponsorName: string;
  sponsorLogo: string;
}

const Folder: FC<FolderProps> = ({ sponsorName, sponsorLogo }) => {
  return (
    <>
      <div className="sponsor-display">
        <div className="fb-folder-shadow">
          <div className="folder-tab-outline-shadow"></div>
          <div className="folder-tab-shadow"></div>
          <div className="folder-body-shadow"></div>
        </div>
        <div className="fb-folder">
          <div className="folder-tab-outline"></div>
          <div className="folder-tab"></div>
          <div className="folder-tab-line"></div>
          <div className="folder-body">
            <img className="sponsor-logo" src={sponsorLogo} />
            <h1 className="sponsor-label">{sponsorName}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Folder;
