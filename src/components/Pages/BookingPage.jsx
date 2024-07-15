import React, { useContext, useState } from 'react';
import { BookingContext } from '../../components/config/BookingContext';
import { MdDelete } from 'react-icons/md';
import PaymentModal from './PaymentModal';

const BookingPage = () => {
  const { bookingItems, removeFromBooking, clearBooking, updateNumberOfPeople } = useContext(BookingContext);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleNumberOfPeopleChange = (id, amount) => {
    updateNumberOfPeople(id, amount);
  };

  const openPaymentModal = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("You must be logged in to proceed with payment.");
      return;
    }

    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return ( 
    <div className="booking-page-container">
      <h2>Booking Page</h2>
      <table className="booking-table">
        <thead className="booking-table-header">
          <tr>
            <th>Destinations / Hotels</th>
            <th>PRICE</th>
            <th>Number of People</th>
            <th>SUBTOTAL</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody className="booking-table-body">
          {bookingItems.map(item => (
            <tr key={item.id} className="booking-table-row">
              <td className="booking-item-details">
                <img src={item.image} alt={item.name} className="booking-item-image" />
                <div className="booking-item-name">{item.name}</div>
              </td>
              <td className="booking-item-price">${item.price}</td>
              <td className="booking-item-number-of-people">
                <button onClick={() => handleNumberOfPeopleChange(item.id, -1)} className="quantity-button">-</button>
                {item.numberOfPeople}
                <button onClick={() => handleNumberOfPeopleChange(item.id, 1)} className="quantity-button">+</button>
              </td>
              <td className="booking-item-subtotal">${(item.price * item.numberOfPeople).toFixed(2)}</td>
              <td className="booking-item-remove">
                <MdDelete onClick={() => removeFromBooking(item.id)} className="delete-icon" />
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <div className="booking-buttons">
        <button className="clear-cart-button" onClick={clearBooking}>Clear Cart</button>
        <button 
          className="payment-button" 
          onClick={openPaymentModal}
          disabled={bookingItems.length === 0}
        >
          Proceed to Payment
        </button>
      </div>

      {/* PaymentModal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onRequestClose={closePaymentModal} 
        bookingItems={bookingItems}
      />
    </div>
  );
};

export default BookingPage;
