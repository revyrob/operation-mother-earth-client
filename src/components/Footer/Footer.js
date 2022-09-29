import "./Footer.scss";
import { Link } from "react-router-dom";
import ButtonMailto from "../ButtonMailto/ButtonMailto";

function Footer() {
  return (
    <section className="footer">
      <ButtonMailto mailto="mailto:kayle.robson@gmail.com" />
      <Link to="/about">
        <p className="footer__text">About Me</p>
      </Link>
    </section>
  );
}
export default Footer;
