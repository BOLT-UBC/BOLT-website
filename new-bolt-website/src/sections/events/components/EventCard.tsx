import { FC } from "react";
import styles from "./EventCard.module.css";

interface EventCardProps {
  name: string;
  description: string;
  image: string;
  registrationOpen: boolean;
}

const EventCard: FC<EventCardProps> = ({
  name,
  description,
  image,
  registrationOpen,
}) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.imageContainer}>
        {image ? (
          <img src={image} alt={name} className={styles.eventImage} />
        ) : (
          <div className={styles.placeholderImage} />
        )}
      </div>
      <div className={styles.eventInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        {registrationOpen && (
          <span className={styles.registrationBadge}>Registration Open</span>
        )}
      </div>
    </div>
  );
};

export default EventCard;
