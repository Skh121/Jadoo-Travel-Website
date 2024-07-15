import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BookingContext } from '../../components/config/BookingContext';

const HotelsBack = () => {
  const { addToBooking, bookingItems } = useContext(BookingContext);
  const [hotels, setHotels] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:8080/hotel/get');
      setHotels(response.data.data);
    } catch (error) {
      console.error('Failed to fetch hotels:', error);
      setMessage('Failed to fetch hotels. Please try again.');
    }
  };

  const handleShowDetails = (hotelId) => {
    navigate(`/hotel/${hotelId}`);
  };

  const handleBookNow = async (hotel) => {
    try {
      const alreadyAdded = bookingItems.some(item => item.id === hotel.hotelId);

      if (alreadyAdded) {
        alert(`${hotel.hotelName} is already added to Bookings!`);
        navigate("/bookings");
      } else {
        const bookingData = {
          id: hotel.hotelId,
          name: hotel.hotelName,
          price: hotel.price,
          image: `http://localhost:8080/hotel/image/${hotel.hotelId}`,
          type: hotel.type // Ensure type is included here
        };
        await addToBooking(bookingData);
        alert(`${hotel.hotelName} has been added to Bookings!`);
        navigate("/bookings");
      }
    } catch (error) {
      console.error("Failed to add booking:", error);
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <div className="destinations-container">
        <h2 className="destinations-title">All Hotels</h2>
        <div className="destinations-grid">
          {hotels.map((hotel) => (
            <div key={hotel.hotelId} className="destination-card">
              <div className='destination-image-card'>
                <img
                  src={`http://localhost:8080/hotel/image/${hotel.hotelId}`}
                  alt={hotel.hotelName}
                  className="destination-image"
                  onError={(e) => {
                    console.error(`Error loading image for destination ${hotel.hotelId}`);
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className="destination-content">
                <h3 className="destination-title">{hotel.hotelName}</h3>
                <p className="destination-price">Price: ${hotel.price}</p>
                <div className="destination-buttons">
                  <button
                    className="destination-button show-details"
                    onClick={() => handleShowDetails(hotel.hotelId)}
                  >
                    Show Details
                  </button>
                  <button
                    className="destination-button book"
                    onClick={() => handleBookNow(hotel)}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelsBack;
