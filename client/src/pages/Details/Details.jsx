import "./Details.scss";
import Gallery from "../../components/Gallery/Gallery";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";
import { useParams } from "react-router-dom";
import { listings } from "../..//data/data";

const Details = () => {
  const { id } = useParams();

  const listing = listings.find((listing) => listing.id === parseInt(id));

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
