import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingContext } from '../../components/config/BookingContext';

Modal.setAppElement('#root');

const PaymentModal = ({ isOpen, onRequestClose }) => {
  const { bookingItems, clearBooking } = useContext(BookingContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const calculateTotal = () => {
    return bookingItems.reduce((total, item) => total + (item.price * item.numberOfPeople), 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const paymentData = {
        username,
        email,
        cardNumber,
        cvvNumber,
        expiryDate,
        totalAmount: calculateTotal(),
        paymentDateTime: new Date().toISOString(),
        customerId: { id: localStorage.getItem("userId") },
        bookingItems: bookingItems.map(item => ({
          id: item.id,
          type: item.type,
          numberOfPeople: item.numberOfPeople
        }))
      };
      
      const response = await axios.post('http://localhost:8080/api/payment2/process', paymentData);
      
      toast.success('Payment processed successfully!', {
        position: 'top-right',
        autoClose: 3000,
        onClose:()=> window.location.reload()
      });
      
      clearBooking();
      onRequestClose();
    } catch (error) {
      console.error('Error processing payment:', error);
      toast.error('Failed to process payment. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        onClose:()=> window.location.reload()
      });
      
    }
  };

  return (
    <>
      <ToastContainer transition={Slide} />
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="payment-modal"
        overlayClassName="payment-modal-overlay"
      >
        <h2>Enter Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
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
          <div>Total Amount: ${calculateTotal()}</div>
          <button type="submit">Pay Now</button>
        </form>
      </Modal>
    </>
  );
};

export default PaymentModal;
