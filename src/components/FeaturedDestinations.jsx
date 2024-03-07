import "./styles/FeaturedDestinations.css";
import "./styles/Container.css";
import destination1 from "../assets/images/Thumbnail/Rectangle 18-11.png";
import destination2 from "../assets/images/Thumbnail/Rectangle 18-22.png";
import destination3 from "../assets/images/Thumbnail/Rectangle 181.png";

const FeaturedDestinations = () => {
  const destinations = [
    {
      image: destination3,
      title: "Stopover opportunity in İstanbul with Turkish Airlines",
    },
    {
      image: destination1,
      title: "Discover the timeless city with Touristanbul of Turkish Airlines",
    },
    {
      image: destination2,
      title: "The best of Abu Dhabi with exclusive Etihad Airways!",
    },
  ];
  return (
    <div className="container">
      <h1 className="section_title">Featured Destinations</h1>
      <div className="destinations_container">
        {destinations.map((destination, index) => (
          <div key={index} className="destinations_items">
            <img
              src={destination.image}
              alt=""
              className="destinations_image"
            />
            <h2 className="destinations_title">{destination.title}</h2>
            <div className="view_btn_container">
              <button className="view_btn">View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
