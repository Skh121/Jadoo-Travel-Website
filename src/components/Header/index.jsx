import Logo from "../../assets/images/Logo.png"
import menu from "../../assets/images/menu.png"
import decore from "../../assets/images/decore.png"
import play_button from "../../assets/images/play-button.png"
import hero_image from "../../assets/images/hero-image.png"
import { useContext } from "react"
import {contextApi} from '../../context';

const Header = () => {
  const { openSidebar } = useContext(contextApi);
  return (
    <header>
      <div className="header__center container">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <button id="nav__menu" className="nav__menu" onClick={openSidebar} style={{cursor: 'pointer',background:'transparent',border:'none'}}>
          <img src={menu} alt="Menu" />
        </button>
        <nav className="nav">
          <ul>
            <li className="nav--list destination">
              <a href="#destinations">Destinations</a>
            </li>
            <li className="nav--list"><a href="#destinations">Hotels</a></li>
            <li className="nav--list"><a href="#brands">Flights</a></li>
            <li className="nav--list">
              <a href="#bookings">Bookings</a>
            </li>
            <li className="nav--list"><a href="#">Login</a></li>
            <li className="nav--list signup"><a href="#">Sign up</a></li>
            <li className="nav--list">
              <select>
                <option value="EN">EN</option>
              </select>
            </li>
          </ul>
        </nav>
        <div className="dropdown__items">
          <a className="active" href="#destinations">Destinations</a>
          <a href="#destinations">Hotels</a>
          <a href="#brands">Flights</a>
          <a href="#bookings">Bookings</a>
          <a href="#">Login</a>
          <a className="dropdown__signup" href="#">Sign up</a>
        </div>
      </div>

      <div className="hero">
        <div className="container hero__center">
          <div className="hero__content">
            <p className="hero__title">Best Destinations around the world</p>
            <h1 className="hero__heading">
              Travel, <span>enjoy</span> and live a new and full life
            </h1>
            <p className="hero__slogan">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="hero__cta">
              <a className="cta__info" href="#">Find out more</a>
              <div className="cta__demo">
                <img
                  className="cta__image--play"
                  src={play_button}
                  alt="Play Button"
                />
                <span className="cta__txt">Play Demo</span>
              </div>
            </div>
          </div>
          <div className="hero__image--container">
            <img className="hero__image" src={hero_image} alt="Hero Image" />
          </div>
        </div>
      </div>
      <div className="background--image">
        <img src={decore} alt="Decore Image" />
      </div>
    </header>
  )
}

export default Header