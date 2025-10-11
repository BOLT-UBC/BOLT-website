import React from "react";
import styles from "./Events.module.css";
import eventsBG from "../assets/images/Bridge.webp";
import { CAROUSEL } from "../constants/layout";
import { Event, EventsData } from "../types";

// Import with type assertion for JSON data
import eventsDataJson from "../assets/events.json";
const eventsData = eventsDataJson as EventsData;

const Events: React.FC = () => {
  const EVENTS: Event[] = eventsData.events;

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
                    content.scrollLeft -= CAROUSEL.SCROLL_AMOUNT;
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
                    content.scrollLeft += CAROUSEL.SCROLL_AMOUNT;
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
