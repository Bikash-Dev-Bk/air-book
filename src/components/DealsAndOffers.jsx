import "./styles/DealsAndOffers.css";
import "./styles/Container.css";
import img1 from "../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png";
import img2 from "../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png";
import img3 from "../assets/images/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png";

const DealsAndOffers = () => {
  return (
    <div className="container">
      <h1 className="section_title">Deals And Offers</h1>
      <div className="offers_container">
        <div className="offers_items">
          <img src={img3} alt="" />
          <div>
            <p className="offers_item_title">With bkash payment only</p>
            <h2 className="offers_item_discount">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className="offers_items">
          <img src={img1} alt="" />
          <div>
            <p className="offers_item_title">With bkash payment only</p>
            <h2 className="offers_item_discount">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
        <div className="offers_items">
          <img src={img2} alt="" />
          <div>
            <p className="offers_item_title">With bkash payment only</p>
            <h2 className="offers_item_discount">
              up to 14% discount on the base fare of domestic flights
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsAndOffers;
