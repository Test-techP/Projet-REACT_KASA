import { useEffect, useState } from "react";

import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

import { getProperties } from "../../services/propertyService";

import "./Home.css";

import homeBanner from "../../assets/images/home-banner.jpg";

function Home() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProperties() {
      try {
        const data = await getProperties();

        setProperties(data);
      } catch (error) {
        console.error(error);

        setError(
          "Impossible de charger les logements."
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadProperties();
  }, []);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Banner
        image={homeBanner}
        title="Chez vous, partout et ailleurs"
      />

      <section className="properties">
        {properties.map((property) => (
          <Card
            key={property.id}
            property={property}
          />
        ))}
      </section>
    </>
  );
}

export default Home;