import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import { toast, ToastContainer,Slide  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingContext } from "../../components/config/BookingContext";

const DestinationDetails = () => {
  const { destinationId } = useParams();
  const { bookingItems, addToBooking } = useContext(BookingContext);
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDestinationDetails();
  }, []);

  useEffect(() => {
    console.log("Current booking items:", bookingItems);
  }, [bookingItems]);

  const fetchDestinationDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/destination/get/${destinationId}`
      );
      setDestination(response.data);
    } catch (error) {
      console.error("Failed to fetch destination details:", error);
    }
  };

  const handleBookNow = async () => {
    try {
      if (destination) {
        const alreadyAdded = bookingItems.some(
          (item) => item.id === destination.destinationId
        );

        if (alreadyAdded) {
          toast.error(`${destination.destinationName} is already added to Bookings!`, {
            position: 'top-right',
            autoClose: 3000,
            onClose: () => navigate("/bookings")
          });
        } else {
          const bookingData = {
            id: destination.destinationId,
            name: destination.destinationName,
            price: destination.price,
            image: `http://localhost:8080/destination/image/${destination.destinationId}`,
            type: destination.type,
          };
          await addToBooking(bookingData);
          toast.success(`${destination.destinationName} has been added to Bookings!`, {
            position: 'top-right',
            autoClose: 3000,
            onClose: () => navigate("/bookings")
          });
        }
      }
    } catch (error) {
      console.error("Failed to add booking:", error);
    }
  };

  if (!destination) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <ToastContainer transition={Slide} />
      <div className="destinations-nav">
        <Nav />
      </div>
      <div className="details-container">
        <div className="details-header">
          <h2 className="details-name">{destination.destinationName}</h2>
          <p className="details-price">Price: ${destination.price}</p>
        </div>
        <div className="details-image-container">
          <div className="details-image-wrapper">
            <img
              src={`http://localhost:8080/destination/image/${destination.destinationId}`}
              alt={destination.destinationName}
              className="details-image"
            />
          </div>
          <div className="details-content">
            <p>{destination.details}</p>
          </div>
        </div>
        <div className="details-button-container">
          <button
            className="details-button book-button"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default DestinationDetails;
