import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">
          ×
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;