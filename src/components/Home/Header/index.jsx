import React, { useState } from 'react';
import decore from "../../../assets/images/decore.png";
import play_button from "../../../assets/images/play-button.png";
import hero_image from "../../../assets/images/hero-image.png";
import Nav from "../../Pages/Nav";
import { Link } from "react-router-dom";
import jadooVideo from "../../../assets/video/Jadoo.mp4"

const Header = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  const handleExitButtonClick = () => {
    setIsVideoPlaying(false);
  };

  return (
    <header>
      <Nav />
      <div className="hero">
        <div className="container hero__center">
          <div className="hero__content">
            <p className="hero__title">Best Destinations around the world</p>
            <h1 className="hero__heading">
              Travel, <span>enjoy</span> and live a new and full life
            </h1>
            <p className="hero__slogan">
              Discover your next adventure with us – explore breathtaking
              destinations, indulge in unique experiences, and create
              unforgettable memories on our guided tours.
            </p>
            <div className="hero__cta">
              <Link to="/about" className="cta__info">
                Find out more
              </Link>
              <div className="cta__demo" onClick={handlePlayButtonClick}>
                <img
                  className="cta__image--play"
                  src={play_button}
                  alt="Play Button"
                />
                <span className="cta__txt">Play Demo</span>
              </div>
            </div>
          </div>
          <div className="hero__image--container">
            <img className="hero__image" src={hero_image} alt="Hero Image" />
          </div>
        </div>
      </div>
      <div className="background--image">
        <img src={decore} alt="Decore Image" />
      </div>
      {isVideoPlaying && (
        <div className="video__container">
          <button className="video__exit" onClick={handleExitButtonClick}>
            &times;
          </button>
          <video width="700" height="350" controls autoPlay>
            <source src={jadooVideo} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </header>
  );
};

export default Header;
