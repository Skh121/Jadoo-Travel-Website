import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [message, setMessage] = useState('');

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
                <p className="destination-details">{destination.details}</p>
                <p className="destination-price">Price: ${destination.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
