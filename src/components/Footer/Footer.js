import "./Footer.scss";

import ButtonMailto from "../ButtonMailto/ButtonMailto";

function Footer() {
  return (
    <section className="footer">
      <ButtonMailto mailto="mailto:kayle.robson@gmail.com" />
      <p className="footer__text">@ 2022 Revyrob. All rights reserved.</p>
    </section>
  );
}
export default Footer;
