import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import aboutBanner from "../../assets/images/about-banner.jpg";

import "./About.css";

function About() {
  return (
    <div className="about">
      <Banner image={aboutBanner} />

      <section className="about__collapses">
        <Collapse
          title="Fiabilité"
          content="Ajoute ici le texte Fiabilité fourni dans la maquette."
        />

        <Collapse
          title="Respect"
          content="Ajoute ici le texte Respect fourni dans la maquette."
        />

        <Collapse
          title="Service"
          content="Ajoute ici le texte Service fourni dans la maquette."
        />

        <Collapse
          title="Sécurité"
          content="Ajoute ici le texte Sécurité fourni dans la maquette."
        />
      </section>
    </div>
  );
}

export default About;