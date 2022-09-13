import "./Footer.scss";
import envelope from "../../assets/icons/envelope-icon.png";

function Footer() {
  return (
    <section className="footer">
      <img className="footer__icon" src={envelope} alt={"envelope icon"} />
      <p className="footer__text">@ 2022 Revyrob. All rights reserved.</p>
    </section>
  );
}
export default Footer;
