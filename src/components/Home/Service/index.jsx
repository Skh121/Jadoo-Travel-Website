import satellite from "../../../assets/images/satellite.png";
import plane from "../../../assets/images/plane.png";
import events from "../../../assets/images/events.png";
import customization from "../../../assets/images/customization.png";


const Service = () => {
  return (
    <section id="services">
        <p className="title">CATEGORY</p>
        <h2 className="heading">We Offer Best Services</h2>

        <div className="service">
          <article className="service__article">
            <img src={satellite} alt="Satellite" />
            <h4>Calculated Weather</h4>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </article>
          <article className="service__article">
            <img src={plane} alt="Flights" />
            <h4>Best Flights</h4>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </article>
          <article className="service__article">
            <img src={events} alt="Events" />
            <h4>Local Events</h4>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </article>
          <article className="service__article">
            <img src={customization} alt="Customization" />
            <h4>Customization</h4>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </article>
        </div>
      </section>
  )
}

export default Service