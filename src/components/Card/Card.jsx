import { Link } from "react-router-dom";

import "./Card.css";

function Card({ property }) {
  return (
    <Link
      to={`/logement/${property.id}`}
      className="card"
    >
      <article className="card__content">
        <img
          src={property.cover}
          alt={property.title}
          className="card__image"
        />

        <h2 className="card__title">
          {property.title}
        </h2>
      </article>
    </Link>
  );
}

export default Card;