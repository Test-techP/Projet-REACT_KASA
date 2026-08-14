import { Link } from "react-router-dom";

function Error404() {
  return (
    <section className="error-page">
      <h1 className="error-page__code">404</h1>

      <p className="error-page__message">
        Oups ! La page que vous demandez n’existe pas.
      </p>

      <Link to="/" className="error-page__link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error404;