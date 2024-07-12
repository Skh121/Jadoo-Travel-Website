import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Example icon import

const BookingItems = ({ image, name }) => {
  return (
    <div className="booking-item">
      <img src={image} alt={name} className="booking-item-image" />
      <div className="booking-item-details">
        <p className="booking-item-name">{name}</p>
        <button className="booking-item-add">
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>
    </div>
  );
};

BookingItems.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BookingItems;
