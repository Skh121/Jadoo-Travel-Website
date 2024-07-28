import facebook from "../../../assets/images/facebook.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/twitter.png";
import google_play from "../../../assets/images/google-play.png";
import g_play_store from "../../../assets/images/g-play-store.png";
import apple from "../../../assets/images/apple.png";
import a_play_store from "../../../assets/images/a-play-store.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="brand__content">
            <h1>Jadoo</h1>
            <p>Book your trip in minutes, get full control for much longer.</p>
          </div>
          <div className="footer__nav--wrapper">
            <div className="footer__nav">
              <h4>Company</h4>
              <ul className="footer__nav--menu">
                <Link to="/about">
                  <li className="footer__a">About</li>
                </Link>
                <Link to="/about">
                  <li className="footer__a">Careers</li>
                </Link>
                <Link to="/contact">
                  <li className="footer__a">Mobile</li>
                </Link>
              </ul>
            </div>
            <div className="footer__nav">
              <h4>Contact</h4>
              <ul className="footer__nav--menu">
                <Link to="/contact">
                  <li className="footer__a">Help/FAQ</li>
                </Link>
                <Link to="/contact">
                  <li className="footer__a">Press</li>
                </Link>
                <Link to="/contact">
                  <li className="footer__a">Affiliates</li>
                </Link>
              </ul>
            </div>
            <div className="footer__nav">
              <h4>More</h4>
              <ul className="footer__nav--menu">
                <li>
                  <a href="https://www.skyscanner.net/airlinefees" className="footer__a">
                    Airline fees
                  </a>
                </li>
                <li>
                  <a href="https://www.skyscanner.net/airlinefees" className="footer__a">
                    Airline
                  </a>
                </li>
                <li>
                  <a href="https://www.skyscanner.net/airlinefees" className="footer__a">
                    Low fare tips
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__cta">
            <div className="footer__socials">
              <a href="https://www.facebook.com/sabin.khadka.3994/">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/sabinkhadka121/">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://x.com/?lang=en">
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
            <p>Discover our app</p>
            <div className="footer__socials--btn">
              <div className="footer__btn--container">
                <a href="https://play.google.com/store">
                <div className="play-google">
                  <img
                    className="play-image"
                    src={google_play}
                    alt="Google Play Store"
                  />
                  <img
                    className="play-info"
                    src={g_play_store}
                    alt="Get Google Play"
                  /></div>
                </a>
              </div>
              <div className="footer__btn--container">
                <a href="https://www.apple.com/app-store/">
                  <img className="a-play-image" src={apple} alt="Apple Store" />
                  <img
                    className="play-info"
                    src={a_play_store}
                    alt="Get Apple Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="footer__rights">All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;
