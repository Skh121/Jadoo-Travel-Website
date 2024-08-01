import React from 'react';
import { useNavigate } from 'react-router-dom';
import ForbiddenImg from '../../assets/images/ForbiddenImg.png'; // Add an image for visual effect

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <img
          src={ForbiddenImg}
          alt="Unauthorized Access"
          className="unauthorized-image"
        />
        <button
          onClick={() => navigate('/')}
          className="unauthorized-button"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
