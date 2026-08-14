import "./Rating.css";

function Rating({ rating }) {
  const maximumRating = 5;

  return (
    <div
      className="rating"
      aria-label={`Note : ${rating} sur 5`}
    >
      {Array.from({ length: maximumRating }, (_, index) => (
        <span
          key={index}
          className={
            index < Number(rating)
              ? "rating__star rating__star--active"
              : "rating__star"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;