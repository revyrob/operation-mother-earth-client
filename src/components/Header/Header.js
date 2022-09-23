import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import home from "../../assets/icons/home-icon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="logo">
      <Link to={"/"}>
        <img
          className="logo__img"
          src={logo}
          alt="operation mother earth logo"
        />
      </Link>
    </section>
  );
}

export default Header;
