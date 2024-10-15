import { FC, ReactNode, CSSProperties } from "react";
import "./Window.css";

interface WindowProps {
  windowName: string;
  children: ReactNode;
  styles?: CSSProperties;
}

const Window: FC<WindowProps> = ({ windowName, children, styles }) => {
  return (
    <>
      <div className="fb-window" style={styles}>
        <div className="fb-window-header">{windowName}</div>
        <div className="fb-window-content">{children}</div>
      </div>
    </>
  );
};
export default Window;
