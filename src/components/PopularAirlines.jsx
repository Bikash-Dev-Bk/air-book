import "./styles/PopularAirlines.css";
import "./styles/Container.css";
import air1 from "../assets/images/Airlines Icon/american.png";
import air2 from "../assets/images/Airlines Icon/BBA.png";
import air3 from "../assets/images/Airlines Icon/Emirates.png";
import air4 from "../assets/images/Airlines Icon/Malaysia.png";
import air5 from "../assets/images/Airlines Icon/Singapore Airlines.png";
import air6 from "../assets/images/Airlines Icon/Turkish Airlines.png";
import { FaStar } from "react-icons/fa6";

const PopularAirlines = () => {
  const airlines = [
    {
      image: air2,
      title: "Biman Bangladesh Airlines",
      review: "4  (783 review)",
    },
    {
      image: air3,
      title: "Emirates",
      review: "5  (783 review)",
    },
    {
      image: air6,
      title: "Turkish Airlines",
      review: "4  (783 review)",
    },
    {
      image: air4,
      title: "Malaysia Airlines",
      review: "5  (783 review)",
    },
    {
      image: air5,
      title: "Singapore Airlines",
      review: "5  (783 review)",
    },
    {
      image: air4,
      title: "Malaysia Airlines",
      review: "5  (783 review)",
    },
    {
      image: air2,
      title: "Biman Bangladesh Airlines",
      review: "4  (783 review)",
    },
    {
      image: air1,
      title: "American airlines",
      review: "4  (783 review)",
    },
    {
      image: air3,
      title: "Emirates",
      review: "5  (783 review)",
    },
    {
      image: air2,
      title: "Biman Bangladesh Airlines",
      review: "5  (783 review)",
    },
    {
      image: air4,
      title: "Malaysia Airlines",
      review: "4  (783 review)",
    },
    {
      image: air6,
      title: "Turkish Airlines",
      review: "5  (783 review)",
    },
  ];
  return (
    <div className="container">
      <h1 className="section_title">Popular Airlines</h1>
      <div className="airline_container">
        {airlines.map((airline, index) => (
          <div key={index} className="airline_items">
            <div>
              <img src={airline.image} alt="" />
            </div>
            <div>
              <p className="airline_title">{airline.title}</p>
              <div className="review">
                <FaStar className="star" />
                <p>{airline.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAirlines;
