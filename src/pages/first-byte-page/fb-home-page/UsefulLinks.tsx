import { FC } from "react";
import "./UsefulLinks.css";

interface UsefulLinkProps {
  thumbnail: string;
  title: string;
  link: string;
}

const UsefulLink: FC<UsefulLinkProps> = ({ thumbnail, title, link }) => {
  return (
    <>
      <a className="link-content" href={link}>
        <img src={thumbnail} className="link-thumbnail" />
        <h4 className="link-name"> {title}</h4>
      </a>
    </>
  );
};
export default UsefulLink;
