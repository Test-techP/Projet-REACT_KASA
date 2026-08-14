import "./Banner.css";

function Banner({ image, title }) {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  );
}

export default Banner;