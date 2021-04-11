import { Link } from "react-router-dom";
import "./BurgerMenu.scss";
import logo from "../../assets/logo.png";

function BurgerMenu({ onClose }) {
  return (
    <div className="burgerMenuWrapper">
      <a href="#" className="closeMenu" onClick={() => onClose()}></a>
      <Link to="/" className="logoLink" >
        <img src={logo} className="logoMobile" />
      </Link>
      <nav className="burgerMenu">
        <div className="menuItems">
          <Link to="/jogs">JOGS</Link>
          <Link to="/info">INFO</Link>
          <Link to="/contacts">CONTACT US</Link>
        </div>
      </nav>
    </div>
  );
}

export default BurgerMenu;
