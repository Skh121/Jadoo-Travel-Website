import React, { useContext } from 'react';
import { Link ,useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import menu from "../../assets/images/menu.png";
import { useAuth } from '../config/AuthContext';
import UserDropdown from '../Home/Login/UserDropdown';
import { contextApi } from '../../context';

const Nav = () => {
  const { isLoggedIn } = useAuth();
  const { openSidebar } = useContext(contextApi);
  const navigate = useNavigate();

  return (
    <div className="header__center container">
      <div className="header__logo">
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} 
          style={{ cursor: "pointer" }} />
      </div>
      <button
        id="nav__menu"
        className="nav__menu"
        onClick={openSidebar}
        style={{ cursor: "pointer", background: "transparent", border: "none" }}
      >
        <img src={menu} alt="Menu" />
      </button>
      <nav className="nav">
        <ul>
          <Link to="/destinations">
            <li className="nav--list">Destinations</li>
          </Link>
          <Link to="/hotels">
            <li className="nav--list">Hotels</li>
          </Link>
          <Link to="/about">
            <li className="nav--list">About Us</li>
          </Link>
          <Link to="/bookings">
            <li className="nav--list">Bookings</li>
          </Link>
          <Link to="/contact">
            <li className="nav--list">Contact us</li>
          </Link>
          <li className={`nav--list ${!isLoggedIn && "signup"}`}>
            {isLoggedIn ? <UserDropdown /> : <Link to="/login">Login</Link>}
          </li>
          <li className="nav--list">
            <select id="option">
              <option value="EN">EN</option>
            </select>
          </li>
        </ul>
      </nav>
      <div className="dropdown__items">
        <a className="active" href="#destinations">
          Destinations
        </a>
        <a href="#destinations">Hotels</a>
        <a href="#brands">Flights</a>
        <a href="#bookings">Bookings</a>
        <a href="#">Login</a>
        <a className="dropdown__signup" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Nav;
