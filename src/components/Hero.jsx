import "./styles/Hero.css";
import "./styles/Container.css";
import hero from "../assets/images/Hero Image/Rectangle 2.png";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero_container">
      <img src={hero} alt="" className="hero_image1" />
      <div className="container ">
        <h1 className="hero_title">
          <span id="welcome">Welcome To</span> <span id="airbook">AirBook</span>
        </h1>
        <div className="hero_white hero_content">
          <div className="hero_info_container1">
            <div className="hero_option">
              <label className="display_flex one_way">
                <input type="radio" name="option" value="option1" />
                One Way
              </label>
              <label className="display_flex round_trip">
                <input type="radio" name="option" value="option2" />
                Round Trip
              </label>
            </div>
            <div className="display_flex">
              <p className="display_flex content_style">
                <span>1 Traveller</span> <IoIosArrowDown />
              </p>
              <p className="display_flex content_style">
                <span>Economy</span> <IoIosArrowDown />
              </p>
            </div>
          </div>
          <div className="hero_info_container">
            <div className="hero_info">
              <h3>DAC</h3>
              <div>
                <h4>Dhaka</h4>
                <p className="hero_small">Hazrat Shahjalal International</p>
              </div>
            </div>
            <div className="hero_info">
              <h3>Cxb</h3>
              <div>
                <h4>Cox's Bazar</h4>
                <p className="hero_small">Cox's Bazar International</p>
              </div>
            </div>
            <div className="hero_info">
              <h3>03</h3>
              <div>
                <h4>October</h4>
                <p className="hero_small">Tuesday 2023</p>
              </div>
            </div>
            <div className="hero_info">
              <h3>05</h3>
              <div>
                <h4>October</h4>
                <p className="hero_small">Tuesday 2023</p>
              </div>
            </div>
            <div className="hero_search">
              <IoMdSearch id="hero_search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
