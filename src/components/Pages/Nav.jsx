import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"
import menu from "../../assets/images/menu.png"
import { useContext } from "react"
import {contextApi} from '../../context'

const Nav = () => {
    const { openSidebar } = useContext(contextApi);
  return (
    <div className="header__center container">
    <div className="header__logo">
      <img src={Logo} alt="Logo" />
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
        <li className="nav--list">
          <a href="#destinations">Hotels</a>
        </li>
        <li className="nav--list">
          <a href="#brands">Flights</a>
        </li>
        <li className="nav--list">
          <a href="#bookings">Bookings</a>
        </li>
        <Link to="/login">
          <li className="nav--list">Login</li>
        </Link>
        <li className="nav--list signup">
          <a href="#">Sign up</a>
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
  )
}

export default Nav