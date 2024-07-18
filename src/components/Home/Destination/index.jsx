import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fly from "../../../assets/images/fly.png";

const Destination = () => {
  const [topDestinations, setTopDestinations] = useState([]);

  useEffect(() => {
    const fetchTopDestinations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/destination/get');
        const destinations = response.data.data;

        // Shuffle the destinations array
        const shuffledDestinations = destinations.sort(() => 0.5 - Math.random());
        
        // Get the top 3 random destinations
        setTopDestinations(shuffledDestinations.slice(0, 3));
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      }
    };

    fetchTopDestinations();
  }, []);

  return (
    <section id="destinations">
      <p className="title">Top Selling</p>
      <h2 className="heading">Top Destinations</h2>

      <div className="locations">
        {topDestinations.map((destination) => (
          <article key={destination.destinationId} className="locations__article">
            <div className="locations__image">
              <img 
                src={`http://localhost:8080/destination/image/${destination.destinationId}`} 
                alt={destination.destinationName} 
                onError={(e) => {
                  console.error(`Error loading image for destination ${destination.destinationId}`);
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                }}
              />
            </div>
            <p className="location__package">
              {destination.destinationName}<span>${destination.price}k</span>
            </p>
            <div className="location__span">
              <img src={fly} alt="Fly" />
              <span>{destination.duration} Day Trip</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Destination;
