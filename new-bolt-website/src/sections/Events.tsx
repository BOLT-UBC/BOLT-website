import React from "react";
import styles from "./Events.module.css";
import bridge from "../assets/images/Bridge.png";
import allevents from "../assets/images/AllEvents.png";
import nextevent from "../assets/images/NextEvent.png";
import Button from "../components/Button";
import eventsData from "../assets/events.json";

const Events: React.FC = () => {
  const EVENTS = eventsData.events;
  const NEXT_EVENT = EVENTS[eventsData.nextEvent];

  const NEXT_EVENT_URL = "https://boltubc.com";

  return (
    <>
      <div className={styles.Events} id="Events">
        <img src={bridge} alt="Bridge" className={styles.bridge} />
        {/* 
        <div className={`${styles.eventContainer} ${styles.left}`}>
          <img src={allevents} alt="All Events" className={styles.eventImage} />
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

        <div className={`${styles.eventContainer} ${styles.right}`}>
          <img
            src={nextevent}
            alt="Next Events"
            className={styles.eventImage}
          />
          <div className={styles.eventContent}>
            <div className={styles.nextEvent}>
              <div className={styles.nextEventInfo}>
                <img
                  src={`/src/assets/images/${NEXT_EVENT.image}`}
                  alt={NEXT_EVENT.name}
                  className={styles.nextEventImage}
                />
                <div className={styles.eventName}>{NEXT_EVENT.name}</div>
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  text="Learn More"
                  onClick={() => window.open(NEXT_EVENT_URL, "_blank")}
                  rounded
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Events;
