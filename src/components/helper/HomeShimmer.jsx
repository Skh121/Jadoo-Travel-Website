import React from 'react'
import Logo from "../../assets/images/Logo.png"
const HomeShimmer = () => {
  return (
    <div className="header__center container shimmer-container">
    <div className="header__logo shimmer shimmer-logo">
      <img src={Logo} alt="Logo Image"/>
    </div>
    <nav className="nav items">
      <ul>
        <li className="nav--list shimmer shimmer-nav-item"></li>
        <li className="nav--list shimmer shimmer-nav-item"></li>
        <li className="nav--list shimmer shimmer-nav-item"></li>
        <li className="nav--list shimmer shimmer-nav-item"></li>
        <li className="nav--list shimmer shimmer-nav-item"></li>
        <li className="nav--list shimmer shimmer-nav-item"></li>
      </ul>
    </nav>
  </div>
  )
}

export default HomeShimmer