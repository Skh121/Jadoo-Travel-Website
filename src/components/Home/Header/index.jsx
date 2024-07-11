import decore from "../../../assets/images/decore.png"
import play_button from "../../../assets/images/play-button.png"
import hero_image from "../../../assets/images/hero-image.png"
import Nav from "../../Pages/Nav"

const Header = () => {
  return (
    <header>
     <Nav/>
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