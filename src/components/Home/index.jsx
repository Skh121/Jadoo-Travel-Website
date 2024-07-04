import Header from "./Header";
import Service from "./Service";
import Destination from "./Destination";
import Booking from "./Booking";
import Testimonial from "./Testimonial";
import Brand from "./Brand";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Header/>
      <Sidebar />
      <Service />
      <Destination />
      <Booking />
      <Testimonial />
      <Brand />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
