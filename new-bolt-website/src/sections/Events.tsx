import React from "react";
import styles from "./Events.module.css";
import eventsData from "../assets/events.json";
import eventsBG from "../assets/images/Bridge.webp";

const Events: React.FC = () => {
  const EVENTS = eventsData.events;

  return (
    <div className={styles.EventsSection} id="Events">
      <div className={styles.eventsBackground}>
        <img
          src={eventsBG}
          alt="Events Background"
          className={styles.eventsBG}
          loading="lazy"
        />
      </div>
      <div className={styles.eventsContent}>
        <div className={styles.Events}>
          <div className={`${styles.eventContainer}`}>
            <div className={styles.eventTitle}>
              <h2>Our Events</h2>
            </div>
            <div className={styles.eventContent}>
              {EVENTS.map((event, index) => (
                <div key={index} className={styles.event}>
                  <img
                    src={`${import.meta.env.BASE_URL}events/${event.image}`}
                    alt={event.name}
                    loading="lazy"
                  />
                  <div>{event.name}</div>
                </div>
              ))}
            </div>
            <div className={styles.scrollButtonContainer}>
              <button
                className={styles.scrollButton}
                onClick={() => {
                  const content = document.querySelector(
                    `.${styles.eventContent}`
                  );
                  if (content) {
                    content.scrollLeft -= 200;
                  }
                }}
              >
                &lt;
              </button>
              <button
                className={styles.scrollButton}
                onClick={() => {
                  const content = document.querySelector(
                    `.${styles.eventContent}`
                  );
                  if (content) {
                    content.scrollLeft += 200;
                  }
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
