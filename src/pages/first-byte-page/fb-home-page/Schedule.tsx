import { FC } from "react";
import "./Schedule.css";
import Task from "./Task";

const Schedule: FC = () => {
  return (
    <>
      <div className="schedule-frame">
        <Task
          TaskName="Registration"
          TimeName="12:45 PM"
          DescName="Check in, grab your stuff, and get ready to roll"
        />
        <Task
          TaskName="Openning"
          TimeName="1:00 PM"
          DescName="A warm welcome to get everyone pumped for the day!"
        />
        <Task
          TaskName="Breakout Room Presentations"
          TimeName="1:15 PM"
          DescName="Small groups share ideas—let’s see what everyone’s working on!"
        />
        <Task
          TaskName="Breaks & Snacks"
          TimeName="3:15 PM"
          DescName="Take a breather, grab a snack, and mingle."
        />
        <Task
          TaskName="Finalist Presentations"
          TimeName="4:15 PM"
          DescName="Our star projects hit the spotlight—don’t miss it!"
        />
        <Task
          TaskName="Awards & Closing Remarks"
          TimeName="5:15 PM"
          DescName="Celebrating wins and wrapping things up."
        />
        <Task
          TaskName="Networking"
          TimeName="5:45 PM"
          DescName="Wrap up with some good chats and new connections."
        />
      </div>
    </>
  );
};
export default Schedule;
