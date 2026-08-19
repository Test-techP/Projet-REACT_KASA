import { NavLink } from "react-router-dom";
import footerLogo from "../../assets/images/logo-footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/" aria-label="Retour à l'accueil">
        <img
          className="footer__logo"
          src={footerLogo}
          alt="Kasa"
        />
      </NavLink>

      <p className="footer__copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;