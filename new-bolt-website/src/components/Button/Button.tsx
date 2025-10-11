import styles from "./Button.module.css";
import { ButtonProps } from "../../types";

function Button({ text, onClick, outline, rounded, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${outline ? styles.outline : ""} ${rounded ? styles.rounded : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
