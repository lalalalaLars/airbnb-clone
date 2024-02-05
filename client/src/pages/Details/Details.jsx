import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchListingById } from "../../service/api";
import {
  fetchListingByIdStart,
  fetchListingByIdSuccess,
  fetchListingByIdFailure,
} from "../../store/reducers/listingsSlice";
import "./Details.scss";
import Gallery from "../../components/Gallery/Gallery";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";
import ReviewsModal from "../../components/ReviewsModal/ReviewsModal";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { listing, loading, error } = useSelector((state) => state.listings);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchListingByIdStart());
    fetchListingById(id)
      .then((data) => {
        dispatch(fetchListingByIdSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListingByIdFailure(error));
      });

    // Add or remove the class based on isModalOpen state
    if (isModalOpen) {
      document.body.classList.add("hide-overflow");
    } else {
      document.body.classList.remove("hide-overflow");
    }
    // Cleanup to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("hide-overflow");
    };
  }, [dispatch, id, isModalOpen]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!listing) {
    return <div>No data available</div>;
  }

  const openReviewsModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="details">
        <div className="details__header">
          <h1>{listing.title}</h1>
          <div className="details__buttons">
            <button>Del</button>
            <button>Gem</button>
          </div>
        </div>

        <Gallery gallery={listing.gallery} />
        <DetailsInfo onReviewClick={openReviewsModal} details={listing} />
        {isModalOpen && (
          <ReviewsModal
            reviews={listing}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Details;
