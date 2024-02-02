import { useParams } from "react-router-dom";
import { useEffect } from "react";
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

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { listing, loading, error } = useSelector((state) => state.listings);

  useEffect(() => {
    dispatch(fetchListingByIdStart());
    fetchListingById(id)
      .then((data) => {
        dispatch(fetchListingByIdSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListingByIdFailure(error));
      });
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Ensure that listing is not undefined before accessing its properties
  if (!listing) {
    return <div>No data available</div>;
  }

  return (
    <div className="details">
      <div className="details__header">
        <h1>{listing.title}</h1>
        <div className="details__buttons">
          <button>Del</button>
          <button>Gem</button>
        </div>
      </div>

      <Gallery gallery={listing.gallery} />
      <DetailsInfo details={listing} />
    </div>
  );
};

export default Details;
