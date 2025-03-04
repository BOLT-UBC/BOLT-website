import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button
          className="closeButton"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="modalTitle">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
