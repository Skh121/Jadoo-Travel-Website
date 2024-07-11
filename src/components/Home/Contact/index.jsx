import React from "react";
import Footer from "../Footer";
import Nav from "../../Pages/Nav";

const Contact = () => {
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
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
