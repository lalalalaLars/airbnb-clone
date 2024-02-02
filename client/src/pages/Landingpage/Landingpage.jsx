import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchListingsStart,
  fetchListingsFailure,
  fetchListingsSuccess,
} from "../../store/reducers/listingsSlice";
import { fetchListings } from "../../service/api";

import "./Landingpage.scss";
import SmallListingCard from "../../components/SmallListingCard/SmallListingCard";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import { Link } from "react-router-dom";

const Landingpage = () => {
  const dispatch = useDispatch();
  const { listings, loading, error } = useSelector((state) => state.listings);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    dispatch(fetchListingsStart());
    // Fetch listings from the API
    fetchListings()
      .then((data) => {
        dispatch(fetchListingsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListingsFailure(error));
      });
  }, [dispatch]);

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="main">
      <FilterTabs onFilterChange={handleFilterChange} />
      <div className="listings">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          listings
            .filter((listing) =>
              activeFilter ? listing.filter_tags.includes(activeFilter) : true
            )
            .map((listing) => (
              <Link key={listing.id} to={`/details/${listing.id}`}>
                <SmallListingCard listing={listing} />
              </Link>
            ))
        )}
      </div>
    </div>
  );
};

export default Landingpage;
