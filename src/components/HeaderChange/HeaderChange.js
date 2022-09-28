import "./HeaderChange.scss";
import logo from "../../assets/logo/logo.png";
import logoIcon from "../../assets/logo/favicon.png";
import { Link } from "react-router-dom";

function HeaderChange() {
  return (
    <section className="logo">
      <Link to={"/"}>
        <img
          className="logo__img"
          src={logo}
          alt="operation mother earth logo"
        />
        {/* <img
          className="logo__img bottom"
          src={logoIcon}
          alt="operation mother earth favicon"
        /> */}
      </Link>
    </section>
  );
}

export default HeaderChange;
