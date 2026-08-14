import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
  const getLinkClassName = ({ isActive }) => {
    return isActive
      ? "header__link header__link--active"
      : "header__link";
  };

  return (
    <header className="header">
      <div className="header__container">
        
        <NavLink to="/" aria-label="Retour à l'accueil">
          <img src={logo} alt="Kasa" />
        </NavLink>

        <nav className="header__navigation" aria-label="Navigation principale">
          <NavLink
            to="/"
            end
            className={getLinkClassName}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={getLinkClassName}
          >
            À Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;