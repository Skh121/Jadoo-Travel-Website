import React from 'react';
import BookingItems from './BookingItems';

const BookingPage = () => {
  const bookings = [
    { id: 1, name: 'Booking 1', image: 'booking1.jpg' },
    { id: 2, name: 'Booking 2', image: 'booking2.jpg' },
  ];

  return (
    <div className="booking-page">
      <h2>Your Bookings</h2>
      <div className="booking-items">
        {bookings.map(booking => (
          <BookingItems key={booking.id} name={booking.name} image={booking.image} />
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
