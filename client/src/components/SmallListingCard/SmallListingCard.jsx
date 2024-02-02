/* eslint-disable react/prop-types */
import "./SmallListingCard.scss";

const SmallListingCard = ({ listing }) => {
  return (
    <>
      <div className="smallCardContainer">
        <img src={listing.image} alt="" />
        <div className="info">
          <h1>{listing.location}</h1>
          <h2>{listing.price_per_night} DKK nat</h2>
        </div>
      </div>
    </>
  );
};

export default SmallListingCard;
