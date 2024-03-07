import "./styles/Testimonials.css";
import "./styles/Container.css";
import testimonial1 from "../assets/images/testimonial/Rectangle 30.png";
import testimonial2 from "../assets/images/testimonial/Rectangle 32.png";
import testimonial3 from "../assets/images/testimonial/Rectangle 33.png";

import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div>
      <h1 className="section_title container">Testimonials</h1>
      <div className="testimonial_container">
        <div className="container content">
          <img src={testimonial1} alt="" className="opacity_image"  />
          <div className="testimonial">
            <img src={testimonial2} alt="" />
            <div className="testimonial_text">
              <p>
                &quot;Unforgettable journeys with John and Sarah! Their travel
                expertise turned our dreams into reality. Can&apos;t wait to
                explore with them again!&quot;
              </p>
              <h4>Emily</h4>
              <h5>Adventure Enthusiast</h5>
              <div>
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
            </div>
          </div>
          <img src={testimonial3} alt="" className="opacity_image"  />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
