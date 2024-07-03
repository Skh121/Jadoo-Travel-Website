import React, { useState } from "react";
import "./App.css"; // Assuming you have an App.css file for the styles
import Header from "./components/Header";
import Service from "./components/Service";
import Destination from "./components/Destination";
import Booking from "./components/Booking";
import Testimonial from "./components/Testimonial";
import Brand from "./components/Brand";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [hamVisible, setHamVisible] = useState(false);

  return (
    <>
      <Header />
      <Sidebar />
      <Service/>
      <Destination />
      <Booking />
      <Testimonial />
      <Brand />
      <Subscribe/>
      <Footer/>
    </>
  );
};

export default App;
