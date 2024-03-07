import "./styles/DealsAndOffers.css";
import "./styles/Container.css";
import img1 from "../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png";
import img2 from "../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png";
import img3 from "../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png";

const DealsAndOffers = () => {
  const deals = [
    {
      image: img3,
      title: "With bkash payment only",
      offer: "up to 14% discount on the base fare of domestic flights",
    },
    {
      image: img1,
      title: "With bkash payment only",
      offer: "up to 14% discount on the base fare of domestic flights",
    },
    {
      image: img2,
      title: "With bkash payment only",
      offer: "up to 14% discount on the base fare of domestic flights",
    },
  ];

  return (
    <div className="container">
      <h1 className="section_title">Deals And Offers</h1>
      <div className="offers_container">
        {deals.map((deal, index) => (
          <div key={index} className="offers_items">
            <img src={deal.image} alt="" />
            <div>
              <p className="offers_item_title">{deal.title}</p>
              <h2 className="offers_item_discount">{deal.offer}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsAndOffers;
