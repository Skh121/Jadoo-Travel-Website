import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Support = () => {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchContactMessages();
  }, []);

  const fetchContactMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/contact');
      setContacts(response.data.data);
    } catch (error) {
      console.error('Failed to fetch contact messages:', error);
      setMessage('Failed to fetch contact messages. Please try again.');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Contact Messages</h2>
      {message && <p className="error-message">{message}</p>}
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Support;
