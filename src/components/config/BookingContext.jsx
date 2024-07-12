import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingItems, setBookingItems] = useState([]);

  const addToBooking = (item) => {
    setBookingItems([...bookingItems, item]);
  };

  const removeFromBooking = (id) => {
    setBookingItems(bookingItems.filter(item => item.id !== id));
  };

  const clearBooking = () => {
    setBookingItems([]);
  };

  const updateNumberOfPeople = (id, amount) => {
    setBookingItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, numberOfPeople: Math.max(1, item.numberOfPeople + amount) } : item
      )
    );
  };

  return (
    <BookingContext.Provider value={{ bookingItems, addToBooking, removeFromBooking, clearBooking, updateNumberOfPeople }}>
      {children}
    </BookingContext.Provider>
  );
};
