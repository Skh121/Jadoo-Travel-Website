import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BookingContext } from '../../components/config/BookingContext';

const DestinationsBack = () => {
  const { addToBooking, bookingItems } = useContext(BookingContext);
  const [destinations, setDestinations] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/destination/get');
      setDestinations(response.data.data);
    } catch (error) {
      console.error('Failed to fetch destinations:', error);
      setMessage('Failed to fetch destinations. Please try again.');
    }
  };

  const handleShowDetails = (destinationId) => {
    navigate(`/destination/${destinationId}`);
  };

  const handleBookNow = async (destination) => {
    try {
      const alreadyAdded = bookingItems.some(item => item.id === destination.destinationId);

      if (alreadyAdded) {
        alert(`${destination.destinationName} is already added to Bookings!`);
        navigate("/bookings");
      } else {
        const bookingData = {
          id: destination.destinationId,
          name: destination.destinationName,
          price: destination.price,
          image: `http://localhost:8080/destination/image/${destination.destinationId}`,
          type: destination.type // Ensure type is included here
        };
        await addToBooking(bookingData);
        alert(`${destination.destinationName} has been added to Bookings!`);
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
        <h2 className="destinations-title">All Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.destinationId} className="destination-card">
              <div className='destination-image-card'>
                <img
                  src={`http://localhost:8080/destination/image/${destination.destinationId}`}
                  alt={destination.destinationName}
                  className="destination-image"
                  onError={(e) => {
                    console.error(`Error loading image for destination ${destination.destinationId}`);
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className="destination-content">
                <h3 className="destination-title">{destination.destinationName}</h3>
                <p className="destination-price">Price: ${destination.price}</p>
                <div className="destination-buttons">
                  <button
                    className="destination-button show-details"
                    onClick={() => handleShowDetails(destination.destinationId)}
                  >
                    Show Details
                  </button>
                  <button
                    className="destination-button book"
                    onClick={() => handleBookNow(destination)}
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

export default DestinationsBack;
