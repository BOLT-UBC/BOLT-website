import styles from "./AllEvents.module.css";
import { EVENTS } from "../../../utils/eventsData";
import EventCard from "./EventCard";

function AllEvents() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url('/assets/all-events-panel.svg')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.scrollContainer}>
        {EVENTS.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
