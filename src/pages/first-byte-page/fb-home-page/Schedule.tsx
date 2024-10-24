import { FC } from "react";
import "./Schedule.css";
import Task from "./Task";

const Schedule: FC = () => {
  return (
    <>
      <div className="schedule-frame">
        <Task
          TaskName="Arrival"
          TimeName="9:00 AM"
          DescName="Yappity yap yap time to check in at the address (dwadwadwa)"
        />
        <Task
          TaskName="Lunch"
          TimeName="12:00 PM"
          DescName="Lunch Time! We will be providing food!!! Yum yum in my tum tum AY PAYAPYAYPYPAPYAYPAPYAYPAYPAYPAPYAYPAYPA PYAYPAPYAPY A YPYAYPYPAY PAYPAYAPA YPYPAPY"
        />
        <Task
          TaskName="Closing Ceremony"
          TimeName="5:00 PM"
          DescName="Yappity yap yap time to leave bai bai hope you had fun"
        />
      </div>
    </>
  );
};
export default Schedule;
