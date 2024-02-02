/* eslint-disable react/prop-types */
import "./Gallery.scss";

const Gallery = ({ gallery }) => {
  return (
    <div className="galleryGrid">
      {gallery &&
        Array.isArray(gallery) &&
        gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={index === 0 ? "bigImage" : ""}
          />
        ))}
    </div>
  );
};

export default Gallery;
