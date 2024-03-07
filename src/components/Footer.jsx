import "./styles/Footer.css";
import "./styles/Container.css";
import logo from "../assets/images/Logo/LOGO white.png";
import { CiLocationOn } from "react-icons/ci";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_info">
          <div>
            <h3>Address</h3>
            <p>
              House- 75 Ka, Main <br /> Rd, Dhaka 1216
            </p>
            <div className="location_container">
              <CiLocationOn />
              <p> View on Maps</p>
            </div>
          </div>
          <div>
            <h3>About Us</h3>
            <h3>Stories</h3>
            <h3>Blogs</h3>
            <h3>Airlines</h3>
            <h3>Testimonials</h3>
          </div>
          <div>
            <h3>Join Us</h3>
            <h3>Terms Of Service</h3>
            <h3>Privacy Policy</h3>
            <h3>Support</h3>
          </div>
          <div>
            <h3>Contact</h3>
            <p>+880 1234562890</p>
            <p>+880 1234562890</p>
            <p>+880 1234562890</p>
            <p>info@airbook.com</p>
          </div>
        </div>
        <hr />
        <div className="footer_footer">
          <img src={logo} alt="" />
          <p>© Copyright AIRBOOK</p>
          <div className="footer_social">
            <TbBrandYoutubeFilled className="footer_icon" />
            <TfiFacebook className="footer_icon" />
            <FaLinkedinIn className="footer_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
