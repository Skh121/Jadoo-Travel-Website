import ellipse1 from "../../assets/images/ellipse1.png";
import ellipse2 from "../../assets/images/ellipse2.png";
import ellipse3 from "../../assets/images/ellipse3.png";

const Testimonial = () => {
  return (
    <section id="testimonials">
        <p className="title">Testimonials</p>

        <div className="testimonial">
          <div className="testimonial__titles">
            <h1 className="heading">What People Say About Us.</h1>
            <p>
              <img src={ellipse1} alt="Ellipse1" />
              <img src={ellipse2} alt="Ellipse2" />
              <img src={ellipse3} alt="Ellipse3" />
            </p>
          </div>
          <div className="testimonial__content">
            <blockquote>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </blockquote>
            <h4>Mike taylor</h4>
            <p>Lahore, Pakistan</p>
          </div>
        </div>
      </section>
  )
}

export default Testimonial