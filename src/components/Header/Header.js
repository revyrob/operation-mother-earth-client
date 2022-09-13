import "./Header.scss";
import logo from "../../assets/logo/logo.png";

function Header() {
  return (
    <section className="logo">
      <img className="logo__img" src={logo} alt="operation mother earth logo" />
    </section>
  );
}

export default Header;
