import { FC } from "react";
import "./Task.css";

interface TaskProps {
  TaskName: string;
  TimeName: string;
  DescName: string;
}

const Task: FC<TaskProps> = ({ TaskName, TimeName, DescName }) => {
  return (
    <>
      <div className="task-frame">
        <div className="task-row">
          <span className="task-name">{TaskName}</span>
          <span className="task-time">{TimeName}</span>
        </div>
        <div className="task-desc">{DescName}</div>
      </div>
    </>
  );
};
export default Task;
