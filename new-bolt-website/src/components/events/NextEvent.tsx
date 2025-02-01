import styles from "./NextEvent.module.css";
import { EVENTS } from "../../../utils/eventsData";

function NextEvent() {
  const nextEvent = EVENTS.find((event) => event.nextEvent);

  return (
    <div
      className={styles.nextEvent}
      style={{
        backgroundImage: "url(/assets/next-event-panel.svg)",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {nextEvent && (
        <div className={styles.nextEventContent}>
          <h2>{nextEvent.name}</h2>
          <p>{nextEvent.description}</p>
          {nextEvent.registrationOpen && (
            <span className={styles.registrationBadge}>Registration Open</span>
          )}
        </div>
      )}
    </div>
  );
}

export default NextEvent;
