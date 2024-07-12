import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/Footer";
import Nav from "./Nav";
import { BookingContext } from "../../components/config/BookingContext";

const DestinationDetails = () => {
  const { destinationId } = useParams();
  const { bookingItems, addToBooking } = useContext(BookingContext);
  const [destination, setDestination] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDestinationDetails();
  }, []);

  const fetchDestinationDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/destination/get/${destinationId}`
      );
      setDestination(response.data.data);
    } catch (error) {
      console.error("Failed to fetch destination details:", error);
    }
  };

  const handleBookNow = async () => {
    try {
      if (destination) {
        // Check if the destination ID already exists in bookingItems
        const alreadyAdded = bookingItems.some(
          (item) => item.id === destination.destinationId
        );

        if (alreadyAdded) {
          alert(`${destination.destinationName} is already added to Bookings!`);
          navigate("/bookings");
        } else {
          await addToBooking({
            id: destination.destinationId,
            name: destination.destinationName,
            price: destination.price,
            numberOfPeople: 1, // Changed from quantity to numberOfPeople
            image: `http://localhost:8080/destination/image/${destination.destinationId}`,
          });
          alert(`${destination.destinationName} has been added to Bookings!`);
          navigate("/bookings");
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
      <Footer />
    </>
  );
};

export default DestinationDetails;
