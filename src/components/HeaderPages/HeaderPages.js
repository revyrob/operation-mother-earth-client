import "./HeaderPages.scss";
import logo from "../../assets/logo/logo.png";
import home from "../../assets/icons/home-icon.svg";
import { Link } from "react-router-dom";

function HeaderPages() {
  return (
    <section className="logo">
      <Link to={"/"}>
        <img
          className="logo__img"
          src={logo}
          alt="operation mother earth logo"
        />
      </Link>
      <Link to={"/"}>
        <img className="logo__home" src={home} alt="home icon - to go home" />
      </Link>
    </section>
  );
}

export default HeaderPages;
