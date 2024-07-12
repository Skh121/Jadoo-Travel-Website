import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

// Setting the app element for screen readers
Modal.setAppElement('#root');

const PaymentModal = ({ isOpen, onRequestClose, destinationId, numberOfPeople, subtotal }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const paymentData = {
        username,
        email,
        cardNumber,
        cvvNumber,
        expiryDate,
        totalPeople: numberOfPeople,
        totalPrice: subtotal,
        paymentDateTime: new Date().toISOString(),
        customer: {
          id: localStorage.getItem("userId")
        },
        destinations: {
          destinationId
        }
      };

      const response = await axios.post('http://localhost:8080/api/payment/process', paymentData);
      console.log('Payment processed successfully:', response.data);
      onRequestClose(); // Close modal after successful payment

    } catch (error) {
      console.error('Error processing payment:', error);
      console.log('Error data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="payment-modal"
      overlayClassName="payment-modal-overlay"
    >
      <h2>Enter Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Card Number
          <input
            type="text"
            placeholder="Enter the 16-digit card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <label>
          CVV Number
          <input
            type="text"
            placeholder="Enter the 3 or 4 digit CVV number"
            value={cvvNumber}
            onChange={(e) => setCvvNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Expiry Date
          <input
            type="month"
            placeholder="Select expiry month and year"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </Modal>
  );
};

export default PaymentModal;
