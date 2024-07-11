import React, { useState } from 'react';
import Modal from './modal';

const Customer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="open-modal-button">
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold mb-4">Modal Content</h2>
        <p>This is a simple modal example.</p>
        <button onClick={closeModal} className="close-modal-button mt-4">
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default Customer;