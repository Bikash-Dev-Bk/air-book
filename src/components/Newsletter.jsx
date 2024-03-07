import "./styles/Newsletter.css";
import "./styles/Container.css";
import newsletter from "../assets/images/News letter/Isolation_Mode.png";

const Newsletter = () => {
  return (
    <div className="container">
      <div className="newsletter_container">
        <div className="newsletter_half">
          <img src={newsletter} alt="" className="newsletter_image" />
        </div>
        <div className="newsletter_half">
          <h1 className="newsletter_title">Subscribe to our Newsletter!</h1>
          <p className="newsletter_tagline">Subscribe to our newsletter and stay updated.</p>
          <input type="text" className="newsletter_input" placeholder="Your Email" />
          <button className="subscribe_btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
