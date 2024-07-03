import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import google_play from "../../assets/images/google-play.png";
import g_play_store from "../../assets/images/g-play-store.png";
import apple from "../../assets/images/apple.png";
import a_play_store from "../../assets/images/a-play-store.png";


const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="brand__content">
              <h1>Jadoo</h1>
              <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className="footer__nav--wrapper">
              <div className="footer__nav">
                <h4>Company</h4>
                <ul className="footer__nav--menu">
                  <li>
                    <a href="#" className="footer__a">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__a">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__a">
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav">
                <h4>Contact</h4>
                <ul className="footer__nav--menu">
                  <li>
                    <a href="#" className="footer__a">
                      Help/FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__a">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__a">
                      Affilates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__nav">
                <h4>More</h4>
                <ul className="footer__nav--menu">
                  <li>
                    <a href="#" className="footer__a">
                      Airlinefees
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__a">
                      Airline
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__a">
                      Low fare tips
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__cta">
              <div className="footer__socials">
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
              </div>
              <p>Discover our app</p>
              <div className="footer__socials--btn">
                <div className="footer__btn--container">
                  <img
                    className="play-image"
                    src={google_play}
                    alt="Google Play Store"
                  />
                  <img
                    className="play-info"
                    src={g_play_store}
                    alt="Get Google Play"
                  />
                </div>
                <div className="footer__btn--container">
                  <img className="a-play-image" src={apple} alt="Apple Store" />
                  <img
                    className="play-info"
                    src={a_play_store}
                    alt="Get Apple Play"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="footer__rights">All rights reserved@jadoo.co</p>
        </div>
      </footer>
  )
}

export default Footer