import { FC } from "react";
import "./Folder.css";

interface FolderProps {
  folderName: string;
  folderLogo: string;
  folderLink: string;
}

const Folder: FC<FolderProps> = ({ folderName, folderLogo, folderLink }) => {
  return (
    <>
      <a className="sponsor-display" href={folderLink}>
        <img className="sponsor-logo" src={folderLogo} />
        <h1 className="sponsor-label folder-text">{folderName}</h1>
        <img
          className="sponsor-folder"
          src="/assets/first-byte/fb-folder.svg"
          alt="My Happy SVG"
        />
      </a>
    </>
  );
};
export default Folder;
