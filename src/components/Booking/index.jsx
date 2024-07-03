import choose_des from "../../assets/images/choose-des.png";
import make_payment from "../../assets/images/make-payment.png";
import reach_airport from "../../assets/images/reach-airport.png";
import greece from "../../assets/images/greece.jpg";
import leaf from "../../assets/images/leaf.png";
import map from "../../assets/images/map.png";
import send from "../../assets/images/send.png";
import building from "../../assets/images/building.png";
import heart from "../../assets/images/heart.png";


const Booking = () => {
  return (
    <section id="bookings">
        <p className="title">Easy and Fast</p>
        <div className="booking">
          <div className="booking__context">
            <h1 className="heading">Book your next trip in 3 easy steps</h1>
            <div className="features">
              <div className="feature">
                <img src={choose_des} alt="Choose Destination" />
                <div className="feature__header">
                  <h4 className="feature__title">Choose Destination</h4>
                  <p className="feature__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
              <div className="feature">
                <img src={make_payment} alt="Make Payment" />
                <div className="feature__header">
                  <h4 className="feature__title">Make Payment</h4>
                  <p className="feature__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
              <div className="feature">
                <img src={reach_airport} alt="Reach Airport" />
                <div className="feature__header">
                  <h4 className="feature__title">Reach Airport on Selected Date</h4>
                  <p className="feature__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="booking__image">
            <div className="card__image">
              <img src={greece} alt="Greece" />
            </div>
            <div className="card__info">
              <p className="card__title">Trip To Greece</p>
              <p className="card__desc">
                <span>14-29 June | by Robbin joseph</span>
              </p>
              <p className="card__svgs">
                <img src={leaf} alt="Leaf" />
                <img src={map} alt="Map" />
                <img src={send} alt="Send" />
              </p>
              <div className="visitors__count">
                <div className="card__visitors--count">
                  <img src={building} alt="Buildings" />
                  <span>24 people going</span>
                </div>
                <img src={heart} alt="Heart" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Booking