import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/payment/getAll');
        setPayments(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching payments: {error}</p>;
  }

  return (
    <div className="payment-table-container">
      <h2>Payment Details</h2>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Card Number</th>
            <th>CVV Number</th>
            <th>Expiry Date</th>
            <th>Payment Date</th>
            <th>Customer ID</th>
            <th>Destination Name</th>
            <th>Total Price</th>
            <th>Total People</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.username}</td>
              <td>{payment.email}</td>
              <td>{payment.cardNumber}</td>
              <td>{payment.cvvNumber}</td>
              <td>{payment.expiryDate}</td>
              <td>{formatDate(payment.paymentDateTime)}</td>
              <td>{payment.customer.id}</td>
              <td>{payment.destinations.destinationName}</td>
              <td>${payment.totalPrice}</td>
              <td>{payment.totalPeople}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
