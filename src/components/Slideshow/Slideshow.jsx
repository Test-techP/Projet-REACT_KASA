import { useState } from "react";
import "./Slideshow.css";

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!pictures || pictures.length === 0) {
    return null;
  }
  const hasMultiplePictures = pictures.length > 1;

  function showPreviousPicture() {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0
        ? pictures.length - 1
        : currentIndex - 1
    );
  }

  function showNextPicture() {
    setCurrentIndex((currentIndex) =>
      currentIndex === pictures.length - 1
        ? 0
        : currentIndex + 1
    );
  }

  return (
    <section className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`${title} - photo ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {hasMultiplePictures && (
        <>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--previous"
            onClick={showPreviousPicture}
            aria-label="Afficher l'image précédente"
          >
            ‹
          </button>

          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--next"
            onClick={showNextPicture}
            aria-label="Afficher l'image suivante"
          >
            ›
          </button>

          <span className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </section>
  );
}

export default Slideshow;