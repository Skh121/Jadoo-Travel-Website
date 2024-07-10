import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const [destinationsData, setDestinationsData] = useState({
    destinationName: '',
    details: '',
    price: '',
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/destination/get');
      setDestinations(response.data.data);
    } catch (error) {
      console.error('Failed to fetch destinations:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDestinationsData({ ...destinationsData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('destinations', new Blob([JSON.stringify(destinationsData)], { type: 'application/json' }));
    formData.append('image', image);

    try {
      await axios.post('http://localhost:8080/destination/save', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Destination created successfully!');
      fetchDestinations();
    } catch (error) {
      setMessage('Failed to create destination. Please try again.');
      console.error('Error creating destination:', error);
    }
  };

  return (
    <div>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destinationName">Destination Name:</label>
          <input
            type="text"
            id="destinationName"
            name="destinationName"
            value={destinationsData.destinationName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="details">Details:</label>
          <input
            type="text"
            id="details"
            name="details"
            value={destinationsData.details}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={destinationsData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <div className="destinations-container">
      <h2 className="destinations-title">All Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div key={destination.destinationId} className="destination-card">
            <h3 className="destination-title">{destination.destinationName}</h3>
            <p className="destination-details">{destination.details}</p>
            <p className="destination-price">Price: ${destination.price}</p>
            {destination.imageData && (
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
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Product;
