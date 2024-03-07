import "./styles/Hero.css";
import "./styles/Container.css";
import hero from "../assets/images/Hero Image/Rectangle 2.png";

const Hero = () => {
  return (
    <div className="hero_container">
      <img src={hero} alt="" className="hero_image1" />
      <div className="container hero_content">
        <h1>
          <span id="welcome">Welcome To</span> <span id="airbook">AirBook</span>
        </h1>
        <div className="hero_white">
            <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
