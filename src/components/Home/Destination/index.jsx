import destination1 from "../../../assets/images/destination1.png";
import destination2 from "../../../assets/images/destination2.png";
import destination3 from "../../../assets/images/destination3.png";
import fly from "../../../assets/images/fly.png";


const Destination = () => {
  return (
    <section id="destinations">
      
        <p className="title">Top Selling</p>
        <h2 className="heading">Top Destinations</h2>

        <div className="locations">
          <article className="locations__article">
            <div className="locations__image">
              <img src={destination1} alt="Destination1" />
            </div>
            <p className="location__package">
              Rome, Italy<span>$5,42k</span>
            </p>
            <div className="location__span">
              <img src={fly} alt="Fly" />
              <span>10 Days Trip</span>
            </div>
          </article>

          <article className="locations__article">
            <div className="locations__image">
              <img src={destination2} alt="Destination2" />
            </div>
            <p className="location__package">
              London, UK<span>$4,2k</span>
            </p>
            <div className="location__span">
              <img src={fly} alt="Fly" />
              <span>12 Days Trip</span>
            </div>
          </article>

          <article className="locations__article">
            <div className="locations__image">
              <img src={destination3} alt="Destination3" />
            </div>
            <p className="location__package">
              Full Europe <span>$15k</span>
            </p>
            <div className="location__span">
              <img src={fly} alt="Fly" />
              <span>28 Days Trip</span>
            </div>
          </article>
        </div>
      </section>
  )
}

export default Destination