import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import subscribe_play from "../../../assets/images/subscribe-play.png";

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/subscribe', { email });
      toast.success('Email Sent Successfully', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error('Internal Server Error', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer transition={Slide} />
      <section id="subscribe">
        <div className="subscribe__info">
          <h1 className="heading">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h1>
          <form className="subscribe__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              id="subscribe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe__btn">
              Subscribe
            </button>
          </form>
          <div className="subscribe__image">
            <img src={subscribe_play} alt="Subscribe Play" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
