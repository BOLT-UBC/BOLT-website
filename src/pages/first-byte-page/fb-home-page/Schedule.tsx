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
          DescName="Yappity yap yap time to check in at the address (dwadwadwa)"
        />
        <Task
          TaskName="Openning"
          TimeName="1:00 PM"
          DescName="Lunch Time! We will be providing food!!! Yum yum in my tum tum AY PAYAPYAYPYPAPYAYPAPYAYPAYPAYPAPYAYPAYPA PYAYPAPYAPY A YPYAYPYPAY PAYPAYAPA YPYPAPY"
        />
        <Task
          TaskName="Breakout Room Presentations"
          TimeName="1:15 PM"
          DescName="Yappity yap yap time to leave bai bai hope you had fun"
        />
        <Task
          TaskName="Breaks & Snacks"
          TimeName="3:15 PM"
          DescName="Yappity yap yap time to leave bai bai hope you had fun"
        />
        <Task
          TaskName="Finalist Presentations"
          TimeName="4:15 PM"
          DescName="Yappity yap yap time to leave bai bai hope you had fun"
        />
        <Task
          TaskName="Awards & Closing Remarks"
          TimeName="5:15 PM"
          DescName="Yappity yap yap time to leave bai bai hope you had fun"
        />
        <Task
          TaskName="Networking"
          TimeName="5:45 PM"
          DescName="Yappity yap yap time to leave bai bai hope you had fun"
        />
      </div>
    </>
  );
};
export default Schedule;
