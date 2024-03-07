import "./styles/Navbar.css";
import "./styles/Container.css";
import logo1 from "../assets/images/Logo/LOGO.png";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="container">
        <div className="content">
          <img src={logo1} alt="" />
          <div className="nav_routes">
            <p>Blog</p>
            <p>Offer</p>
            <p>Airlines</p>
            <p>About</p>
          </div>
          <button className="sign_btn">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
