import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDataStats from "./CardDataStats";
import Linechart from "./Linechart";
import AdminHome from "../../../assets/images/AdminHome.png";
import AdminHotel from "../../../assets/images/AdminHotel.png";
import Customer from "../../../assets/images/Customer.png";
import Payment from "../../../assets/images/Payment.png";

const Dashboard = () => {
  const [data, setData] = useState({
    totalDestinations: "0",
    totalHotels: "0",
    totalCustomers: "0",
    totalPayments: "0",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [destinationsRes, hotelsRes, customersRes, paymentsRes] =
          await Promise.all([
            axios.get("http://localhost:8080/destination/count"),
            axios.get("http://localhost:8080/hotel/count"),
            axios.get("http://localhost:8080/customer/count"),
            axios.get("http://localhost:8080/api/payment2/count"),
          ]);

        setData({
          totalDestinations: destinationsRes.data.data || "0",
          totalHotels: hotelsRes.data.data || "0",
          totalCustomers: customersRes.data.data || "0",
          totalPayments: paymentsRes.data.data || "0",
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="mx-4 text-2xl font-bold ">Dashboard</h1>

      <div className="m-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <CardDataStats
            title="Total Destinations"
            total={data.totalDestinations}
          >
            <img src={AdminHome} alt="Home" />
          </CardDataStats>

          <CardDataStats
            title="Total Hotels"
            total={data.totalHotels}
          >
            <img src={AdminHotel} alt="Hotel" />
          </CardDataStats>

          <CardDataStats
            title="Total Customers"
            total={data.totalCustomers}
          >
            <img src={Customer} alt="Customer" />
          </CardDataStats>

          <CardDataStats
            title="Total Payments"
            total={data.totalPayments}
          >
            <img src={Payment} alt="Payment"/> 
          </CardDataStats>
        </div>
        <div className="my-4">
          <Linechart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
