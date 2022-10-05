import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header__logo">
        <Link to={"/"}>
          <img
            className="header__img"
            src={logo}
            alt="operation mother earth logo"
          />
        </Link>
      </div>
    </section>
  );
}

export default Header;
