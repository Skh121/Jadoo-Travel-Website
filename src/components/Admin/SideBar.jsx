import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"
import {
  ArrowLeftRightIcon,
  PackageOpen,
  User,
  LayoutDashboard,
  HelpCircleIcon,
  House,
  PlusCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

const variants = {
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const navLinks = [
  {
    link: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    link: "/admin/customer",
    label: "Customer",
    icon: User,
  },
  {
    link: "/admin/destination",
    label: "Destination",
    icon: House,
  },
  {
    link: "/admin/order",
    label: "Order",
    icon: PackageOpen,
  },
  {
    link: "/admin/payment",
    label: "Payment",
    icon: ArrowLeftRightIcon,
  },
  {
    link: "/admin/support",
    label: "Support",
    icon: HelpCircleIcon,
  },
  {
    link: "/admin/addadmin",
    label: "Add Admin",
    icon: PlusCircle,
  },
];

function SideBar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    setIsLoggedIn(false);
    navigate("/");
    console.log("User logged out");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={`sidebar-container ${isExpanded ? "expanded" : "nonexpanded"}`}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="toggle-button"
      >
        <FaArrowRight className="toggle-icon" />
      </div>

      <div className="logo-div">
        <FaHouseChimney className="logo-icon" />
        <span className={`logo-text ${!isExpanded ? "hidden" : ""}`}>
          <img src={Logo} alt="Logo" />
        </span>
      </div>

      <div className="nav-links">
        {navLinks.map((item, index) => (
          <div className="nav-link" key={index}>
            <Link to={item.link} className="link">
              <div
                onClick={() => setActiveIndex(index)}
                className={`link-content ${activeIndex === index ? "active" : "inactive"} ${!isExpanded ? "pl-3" : ""}`}
              >
                <item.icon className="icon" />
                <span className={`label ${!isExpanded ? "hidden" : ""}`}>
                  {item.label}
                </span>
              </div>
            </Link>
          </div>
        ))}
        <div
          onClick={handleLogout}
          className={`logout-section ${!isExpanded ? "collapsed" : ""}`}
        >
          <BiLogOut className="logout-icon" />
          <button className={`logout-button ${!isExpanded ? "hidden" : ""}`} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default SideBar;
