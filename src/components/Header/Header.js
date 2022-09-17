import "./Header.scss";
import logo from "../../assets/logo/logo.png";
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
