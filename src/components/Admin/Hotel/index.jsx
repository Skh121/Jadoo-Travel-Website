import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormModal from '../../config/formModal';

const Hotel = () => {
  const [hotelsData, setHotelsData] = useState({
    hotelName: '',
    details: '',
    price: '',
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [hotels, setHotels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editHotelId, setEditHotelId] = useState(null);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:8080/hotel/get');
      setHotels(response.data.data);
    } catch (error) {
      console.error('Failed to fetch destinations:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotelsData({ ...hotelsData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('hotels', new Blob([JSON.stringify(hotelsData)], { type: 'application/json' }));
    formData.append('image', image);

    try {
      if (editHotelId) {
        await axios.put(`http://localhost:8080/hotel/update/${editHotelId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.post('http://localhost:8080/hotel/save', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      window.location.reload();
      fetchHotels();
      setIsModalOpen(false);
      setEditHotelId(null);
    } catch (error) {
      setMessage('Failed to create/update hotel. Please try again.');
      console.error('Error creating/updating hotel:', error);
    }
  };


  const openEditModal = (hotel) => {
    setHotelsData(hotel);
    setIsModalOpen(true);
    setEditHotelId(hotel.hotelId);
  };

  const deleteHotel = async (hotelId) => {
    try {
      await axios.delete(`http://localhost:8080/hotel/delete/${hotelId}`);
      fetchHotels();
    } catch (error) {
      console.error('Error deleting Hotel:', error);
    }
  };

  return (
    <div>
      <button className="add-destination-button" onClick={() => setIsModalOpen(true)}>Add Hotels</button>
      <FormModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setEditHotelId(null); }}>
        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hotelName">Hotel Name:</label>
            <input
              type="text"
              id="hotelName"
              name="hotelName"
              value={hotelsData.hotelName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="details">Details:</label>
            <textarea
              id="details"
              name="details"
              value={hotelsData.details}
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
              value={hotelsData.price}
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
          <div className='submit-button-center'>
            <button type="submit" className="submit-button">{editHotelId ? 'Update' : 'Submit'}</button>
          </div>
        </form>
      </FormModal>

      {message && <p>{message}</p>}

      <div className="destinations-container">
        <h2 className="destinations-title">All Hotels</h2>
        <div className="destinations-grid">
          {hotels.map((hotel) => (
            <div key={hotel.hotelId} className="destination-card">
              <h3 className="destination-title">{hotel.hotelName}</h3>
              <p className="destination-price">Price: ${hotel.price}</p>
              {hotel.imageData && (
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
              )}
              <div className="button-container">
                <button className="edit-button" onClick={() => openEditModal(hotel)}>Edit</button>
                <button className="delete-button" onClick={() => deleteHotel(hotel.hotelId)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
