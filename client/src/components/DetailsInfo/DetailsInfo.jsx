/* eslint-disable react/prop-types */
import "./DetailsInfo.scss";
import { GradeIcon } from "../../constants/icons";

const DetailsInfo = ({ details, onReviewClick }) => {
  return (
    <div className="detailsInfoContainer">
      <div className="detailsInfoContainer__topDetails">
        <h2>{details.location}</h2>
        <ul>
          <li>{details.max_guests} guests</li>
          <li>{details.num_bedrooms} bedrooms</li>
          <li>{details.num_bathrooms} bathrooms</li>
        </ul>
        <div className="detailsInfoContainer__rating">
          <GradeIcon className="icon" />
          <h4>{details.rating}</h4>
          <button onClick={onReviewClick}>Reviews</button>
        </div>
      </div>
      <hr />
      <div className="detailsInfoContainer__host">
        <img src={details.host.avatar} alt="avatar" />
        <div className="detailsInfoContainer__content">
          <h3>Hosted by {details.host.name}</h3>
        </div>
      </div>
      <hr />
      {details.specialFeatures &&
        Array.isArray(details.specialFeatures) &&
        details.specialFeatures.map((feature, id) => (
          <div key={id} className="container__specialFeatures">
            {feature.icon && <> {feature.icon} </>}
            {feature.title && <h3>{feature.title}</h3>}
            {feature.description && <p>{feature.description} </p>}
          </div>
        ))}
      <hr />
      <div className="container__description">
        <p>{details.description}</p>
      </div>
      <hr />
      <div className="container__amenities">
        <h2>What the place offers</h2>
        {details.amenities &&
          Array.isArray(details.amenities) &&
          details.amenities.map((amenitie, index) => (
            <p key={index}>{amenitie} </p>
          ))}
      </div>
    </div>
  );
};

export default DetailsInfo;
