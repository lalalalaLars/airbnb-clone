import SmallListingCard from "../../components/SmallListingCard/SmallListingCard";
import "./Landingpage.scss";
import { listings } from "../../data/data";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Filtered listings based on active filter
  const filteredListings = activeFilter
    ? listings.filter((listing) => listing.filter_tags.includes(activeFilter))
    : listings;

  return (
    <div className="main">
      <FilterTabs onFilterChange={handleFilterChange} />
      <div className="listings">
        {filteredListings.map((listing) => (
          <Link key={listing.id} to={`/details/${listing.id}`}>
            <SmallListingCard listing={listing} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landingpage;
