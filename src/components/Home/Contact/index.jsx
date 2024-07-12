import React, { useState } from "react";
import axios from 'axios';
import Footer from "../Footer";
import Nav from "../../Pages/Nav";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token) {
      alert('Please log in to send a message');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/contact',
        {
          name,
          email,
          message,
          customerId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setResponseMessage('Message sent successfully');
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('Failed to send message. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  return (
    <>
      <div className="destinations-nav">
        <Nav />
      </div>
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          We would love to hear from you. Whether you have a question, feedback,
          or just want to say hello, feel free to reach out to us!
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <p>
              <strong>Email:</strong> Sabinkhadka121@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +977 9749353969
            </p>
            <p>
              <strong>Address:</strong> Kathmandu, Nepal
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
