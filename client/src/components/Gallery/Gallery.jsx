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
            className={
              index === 0
                ? "bigImage"
                : index === 2
                ? "image2"
                : index === 4
                ? "image4"
                : ""
            }
          />
        ))}
    </div>
  );
};

export default Gallery;
