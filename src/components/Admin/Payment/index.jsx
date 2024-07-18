import React, { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  const [destinationPayments, setDestinationPayments] = useState([]);
  const [hotPayments, seHotPayments] = useState([]);
  const [hotelPayments, setHotelPayments] = useState([]);
  const [combinedPayments, setCombinedPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/payment2/get"
        );
        const payments = response.data;

        // Extract all unique destination IDs from payments
        const uniqueDestinationIds = [
          ...new Set(
            payments.reduce((acc, payment) => {
              return acc.concat(payment.destinationIds);
            }, [])
          ),
        ];

        const uniqueHotelIds = [
          ...new Set(
            payments.reduce((acc, payment) => {
              return acc.concat(payment.hotelIds);
            }, [])
          ),
        ];

        // Fetch details for each destination ID
        const destinationPromises = uniqueDestinationIds.map(
          async (destinationId) => {
            const responseDestination = await axios.get(
              `http://localhost:8080/destination/get/${destinationId}`
            );
            return responseDestination.data;
          }
        );
        const hotelPromises = uniqueHotelIds.map(async (hotelId) => {
          const responseDestination = await axios.get(
            `http://localhost:8080/hotel/get/${hotelId}`
          );
          return responseDestination.data;
        });

        const destinationDetails = await Promise.all(destinationPromises);
        const destinationItem = destinationDetails.map((item) => {
          return item;
        });
        const hotelDetails = await Promise.all(hotelPromises);
        const hotelItem = hotelDetails.map((item) => {
          return item;
        });

        // Separate payments into categories
        const destPayments = payments.filter(
          (payment) =>
            payment.destinationIds.length > 0 && payment.hotelIds.length === 0
        );
        const hotPayments = payments.filter(
          (payment) =>
            payment.hotelIds.length > 0 && payment.destinationIds.length === 0
        );
        const combPayments = payments.filter(
          (payment) =>
            payment.destinationIds.length > 0 && payment.hotelIds.length > 0
        );

        // Map destination details to corresponding payments
        const destinationPaymentsMapped = destPayments.map((payment) => ({
          ...payment,
          destinationItem: payment.destinationIds.map((destId) => {
            return destinationItem.find(
              (dest) => dest.destinationId === destId
            );
          }),
        }));
        const hotelPaymentsMapped = hotPayments.map((payment) => ({
          ...payment,
          hotelItem: payment.hotelIds.map((hotelId) => {
            return hotelItem.find((hotel) => hotel.hotelId === hotelId);
          }),
        }));

        const combinedPaymentsMapped = combPayments.map((payment) => ({
          ...payment,
          destinationItem: payment.destinationIds.map((destId) => {
            return destinationItem.find(
              (dest) => dest.destinationId === destId
            );
          }),
          hotelItem: payment.hotelIds.map((hotelId) => {
            return hotelItem.find((hotel) => hotel.hotelId === hotelId);
          }),
        }));

        setDestinationPayments(destinationPaymentsMapped);
        seHotPayments(hotelPaymentsMapped);
        setHotelPayments(hotPayments);
        setCombinedPayments(combinedPaymentsMapped);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) {
    return <p>Loading Payments...</p>;
  }

  if (error) {
    return <p>Error fetching payments: {error}</p>;
  }

  return (
    <div className="payment-details-container">
      <div className="combined-payments pay">
        <h2>Payment Details for Combined Destinations and Hotels</h2>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Payment Date</th>
              <th>Customer ID</th>
              <th>Destinations / Hotels</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {combinedPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.username}</td>
                <td>{payment.email}</td>
                <td>{formatDate(payment.paymentDateTime)}</td>
                <td>{payment.customerId.id}</td>
                <td>
                  {payment.destinationItem.map((destination, idx) => (
                    <React.Fragment key={idx}>
                      <span>{destination.destinationName}</span>
                      {idx !== payment.destinationItem.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <br/>
                  {payment.hotelItem.map((hotel, idx) => (
                    <React.Fragment key={idx}>
                      <span>{hotel.hotelName}</span>
                      {idx !== payment.hotelItem.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </td>
                <td>${payment.totalAmount}</td>
                <td>{payment.numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="destination-payments pay">
        <h2>Payment Details for Destinations</h2>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Payment Date</th>
              <th>Customer ID</th>
              <th>Destinations</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {destinationPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.username}</td>
                <td>{payment.email}</td>
                <td>{formatDate(payment.paymentDateTime)}</td>
                <td>{payment.customerId.id}</td>
                <td>
                  {payment.destinationItem.map((destination, idx) => (
                    <span key={idx}>{destination.destinationName}</span>
                  ))}
                </td>
                <td>${payment.totalAmount}</td>
                <td>{payment.numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="hotel-payments pay">
        <h2>Payment Details for Hotels</h2>
        <table className="payment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Payment Date</th>
              <th>Customer ID</th>
              <th>Hotels</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {hotPayments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.username}</td>
                <td>{payment.email}</td>
                <td>{formatDate(payment.paymentDateTime)}</td>
                <td>{payment.customerId.id}</td>
                <td>
                  {payment.hotelItem.map((hotel, idx) => (
                    <span key={idx}>{hotel.hotelName}</span>
                  ))}
                </td>
                <td>${payment.totalAmount}</td>
                <td>{payment.numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
