import React from "react";
import styles from "./Events.module.css";
import bridge from "../assets/images/Bridge.png";
import allevents from "../assets/images/AllEvents.png";
import nextevent from "../assets/images/NextEvent.png";
import Button from "../components/Button";
import eventsData from "../assets/events.json";

const Events: React.FC = () => {
  const EVENTS = eventsData.events;

  return (
    <>
      <div className={styles.Events}>
        <div className={`${styles.eventContainer}`}>
          <div className={styles.eventTitle}>
            <h2>Our Events</h2>
          </div>
          <div className={styles.eventContent}>
            {EVENTS.map((event, index) => (
              <div key={index} className={styles.event}>
                <img
                  src={`/src/assets/images/${event.image}`}
                  alt={event.name}
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
    </>
  );
};

export default Events;
