import { useState } from "react";

export const Carousel = ({
  images = ["http://pets-images.dev-apis.com/pets/none.jpg"],
}) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleImageClick = (e) => {
    setActiveImage(e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[activeImage]} alt="Pet Image" />
      <div className="carousel-smaller">
        {images.map((photo, index) => {
          return (
            <img
              src={photo}
              key={photo}
              alt={"carouselImage"}
              data-index={index}
              className={activeImage == index ? "active" : ""}
              onClick={handleImageClick}
            />
          );
        })}
      </div>
    </div>
  );
};
