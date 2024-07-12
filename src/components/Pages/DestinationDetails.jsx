import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/Footer";
import Nav from "./Nav";

const DestinationDetails = () => {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState(null);

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

  const handleBookNow = () => {
    alert(`${destination.destinationName} has been added to Bookings!`);
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
