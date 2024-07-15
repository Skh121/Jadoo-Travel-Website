import React, { createContext, useState, useEffect } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingItems, setBookingItems] = useState(() => {
    const localBook = localStorage.getItem("book");
    return localBook ? JSON.parse(localBook) : [];
  });

  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(bookingItems));
  }, [bookingItems]);

  const addToBooking = (item) => {
    console.log("Adding to booking:", item);
    setBookingItems([...bookingItems, { ...item, numberOfPeople: 1 }]); // Initialize numberOfPeople to 1
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
