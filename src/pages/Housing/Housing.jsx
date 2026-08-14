import { useParams } from "react-router-dom";

function Housing() {
  const { id } = useParams();

  return (
    <section className="page housing-page">
      <h1>Fiche logement</h1>

      <p>
        Identifiant demandé : {id}
      </p>
    </section>
  );
}

export default Housing;