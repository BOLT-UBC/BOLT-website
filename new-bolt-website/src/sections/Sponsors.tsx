import React from 'react';
import styles from './Sponsors.module.css';
import sponsorsImage from "../assets/images/Sponsors.png";

const Sponsors: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={sponsorsImage} alt="Sponsors" className="w-24 h-auto" />
    </div>
  );
};

export default Sponsors;