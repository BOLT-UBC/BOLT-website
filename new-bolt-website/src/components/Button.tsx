import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  outline?: boolean;
  rounded?: boolean;
}

function Button({ text, onClick, outline, rounded }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${outline ? styles.outline : ""} ${rounded ? styles.rounded : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
