import React, { useEffect, useState } from "react";
import axios from "axios";
import Sabin from "../../../assets/images/sabinPto.jpg";
import destination2 from "../../../assets/images/destination2.png";
import destination3 from "../../../assets/images/destination3.png"
import Footer from "../Footer";
import Nav from "../../Pages/Nav";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/about");
        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          setAboutData(response.data.data[0]);
        } else {
          setError(new Error("No about data found"));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error)
    return (
      <p className="text-center py-8 text-red-500">
        Error fetching data: {error.message}
      </p>
    );
  if (!aboutData)
    return <p className="text-center py-8">No about data available</p>;

  return (
    <>
      <div className="destinations-nav">
        <Nav />
      </div>
      <div className="about-us-section">
  <h2 className="about-us-title">About Us</h2>
  <div className="about-us-grid">
    {[Sabin, destination2, destination3, Sabin].map(
      (img, index) => (
        <div key={index} className="about-us-image-container">
          <img src={img} alt={`img ${index + 1}`} className="about-us-image" />
        </div>
      )
    )}
  </div>
  <div className="about-us-vision">
    <p className="about-us-text">{aboutData.ourVision}</p>
  </div>
  <h2 className="about-us-title">Our Mission</h2>
  <div className="about-us-mission">
    <div className="about-us-mission-text">
      <p className="about-us-text">{aboutData.ourMission}</p>
    </div>
    <div className="about-us-image-container main-image">
      <img
        src={destination2}
        alt="Mission Image"
        className="about-us-image"
      />
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default About;
