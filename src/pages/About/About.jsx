import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import aboutBanner from "../../assets/images/about-banner.jpg";
import aboutData from "../../data/aboutData.json";

import "./About.css";

function About() {
  return (
    <div className="about">
      <Banner image={aboutBanner} />

      <section className="about__collapses">
        {aboutData.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </section>
    </div>
  );
}

export default About;