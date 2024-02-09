/* eslint-disable react/prop-types */
import { CloseIcon } from "../../constants/icons";
import "./ReviewsModal.scss";

const ReviewsModal = ({ reviews }) => {
  return (
    <div className="modalContainer">
      <div className="modalContainer__modal">
        <CloseIcon />
        <div className="modalContainer__wrapper">
          <div className="modalContainer__overallRating">
            <h1>{reviews.rating} </h1>
            <h4>Overall rating</h4>
            <div className="modalContainer__ratingProgress">
              <p>5</p>
              <p>4</p>
              <p>3</p>
              <p>2</p>
              <p>1</p>
            </div>
            <div className="modalContainer__ratingProgress">
              <h4>Cleanliness</h4>
              <h4>Accuracy</h4>
              <h4>Check-in</h4>
              <h4>Communication</h4>
              <h4>Location</h4>
              <h4>Value</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
