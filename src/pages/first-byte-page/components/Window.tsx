import { FC, ReactNode } from "react";
import "./Window.css";

interface WindowProps {
  windowName: string;
  children: ReactNode;
}

const Window: FC<WindowProps> = ({ windowName, children }) => {
  return (
    <>
      <div className="fb-window">
        <div className="fb-window-header">{windowName}</div>
        <div className="fb-window-content">{children}</div>
      </div>
    </>
  );
};
export default Window;
