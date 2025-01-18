import { CSSProperties, FC } from "react";
import "./DecoratedNameBar.css";

interface DecoratedNameBarProps {
  name: string;
  styles?: CSSProperties;
}

const DecoratedNameBar: FC<DecoratedNameBarProps> = ({ name, styles }) => {
  return (
    <div className="fb-decorated-name-bar" style={styles}>
      {name}
      <img
        className="fb-search-icon"
        src="/assets/icons/pxl magnifying glass.png"
        alt="Description"
      />
    </div>
  );
};

export default DecoratedNameBar;
