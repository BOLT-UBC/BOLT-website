import { FC } from "react";
import "./Button.css";

interface ButtonProps {
  buttonText: string;
  buttonRedir: string;
}

const Button: FC<ButtonProps> = ({ buttonText, buttonRedir }) => {
  const handleRedirect = () => {
    window.location.href = buttonRedir; // Redirect to the provided URL
  };

  return (
    <>
      <button className="fb-button" onClick={handleRedirect}>
        {buttonText}
      </button>
    </>
  );
};
export default Button;
