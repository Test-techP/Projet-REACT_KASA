import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import Slideshow from "../../components/Slideshow/Slideshow";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

import { getPropertyById } from "../../services/propertyService";

import "./Housing.css";

function Housing() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProperty() {
      try {
        const data = await getPropertyById(id);

        if (!data) {
          setNotFound(true);
          return;
        }

        setProperty(data);
      } catch (error) {
        console.error(error);
        setError("Impossible de charger le logement.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProperty();
  }, [id]);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (notFound) {
    return <Navigate to="/404" replace />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="housing">
      <Slideshow
        pictures={property.pictures}
        title={property.title}
      />

      <div className="housing__information">
        <div className="housing__main-information">
          <h1 className="housing__title">
            {property.title}
          </h1>

          <p className="housing__location">
            {property.location}
          </p>

          <div className="housing__tags">
            {property.tags.map((tag) => (
              <Tag
                key={tag}
                label={tag}
              />
            ))}
          </div>
        </div>

        <div className="housing__secondary-information">
          <Host host={property.host} />

          <Rating rating={property.rating} />
        </div>
      </div>

      <div className="housing__collapses">
        <Collapse
          title="Description"
          content={property.description}
        />

        <Collapse
          title="Équipements"
          content={property.equipments}
        />
      </div>
    </section>
  );
}

export default Housing;