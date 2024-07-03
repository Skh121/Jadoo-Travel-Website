import subscribe_play from "../../assets/images/subscribe-play.png";


const Subscribe = () => {
  return (
    <section id="subscribe">
        <div className="subscribe__info">
          <h1 className="heading">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h1>
          <form className="subscribe__form">
            <input type="text" placeholder="Your email" />
            <a className="subscribe__btn" href="#">
              Subscribe
            </a>
          </form>
          <div className="subscribe__image">
            <img src={subscribe_play} alt="Subscribe Play" />
          </div>
        </div>
      </section>
  )
}

export default Subscribe