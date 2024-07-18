import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/Footer";
import Nav from "./Nav";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingContext } from "../../components/config/BookingContext";

const HotelDetails = () => {
  const { hotelId } = useParams();
  const { bookingItems, addToBooking } = useContext(BookingContext);
  const [hotel, setHotel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotelDetails();
  }, []);

  const fetchHotelDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hotel/get/${hotelId}`
      );
      setHotel(response.data);
    } catch (error) {
      console.error("Failed to fetch destination details:", error);
    }
  };

  const handleBookNow = async () => {
    try {
      if (hotel) {
        // Check if the destination ID already exists in bookingItems
        const alreadyAdded = bookingItems.some(
          (item) => item.id === hotel.hotelId
        );

        if (alreadyAdded) {
          toast.error(
            `${hotel.hotelName} is already added to Bookings!`,
            {
              position: "top-right",
              autoClose: 3000,
              onClose: () => navigate("/bookings"),
            }
          );
        } else {
          const bookingData = {
            id: hotel.hotelId,
            name: hotel.hotelName,
            price: hotel.price,
            image: `http://localhost:8080/hotel/image/${hotel.hotelId}`,
            type: hotel.type, // Ensure type is included here
          };
          await addToBooking(bookingData);
          toast.success(
            `${hotel.hotelName} has been added to Bookings!`,
            {
              position: "top-right",
              autoClose: 3000,
              onClose: () => navigate("/bookings"),
            }
          );
        }
      }
    } catch (error) {
      console.error("Failed to add booking:", error);
    }
  };

  if (!hotel) {
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
          <h2 className="details-name">{hotel.hotelName}</h2>
          <p className="details-price">Price: ${hotel.price}</p>
        </div>
        <div className="details-image-container">
          <div className="details-image-wrapper">
            <img
              src={`http://localhost:8080/hotel/image/${hotel.hotelId}`}
              alt={hotel.hotelName}
              className="details-image"
            />
          </div>
          <div className="details-content">
            <p>{hotel.details}</p>
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

export default HotelDetails;
