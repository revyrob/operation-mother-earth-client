import "./HeaderChange.scss";
import logoIcon from "../../assets/logo/logo-earth.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import education from "../../assets/icons/books-icon.svg";
import game from "../../assets/icons/game-icon.svg";
import recycling from "../../assets/icons/recycling-icon.svg";

function HeaderChange() {
  return (
    <section className="headerChange">
      <div className="headerChange__home">
        <Link to={"/"}>
          <motion.div
            className="container"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 5 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 50,
            }}
          />
          <motion.img
            className="container headerChange"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 50,
            }}
            src={logoIcon}
            alt="operation mother earth logo earth icon"
          />
        </Link>
      </div>
      <div className="headerChange__other">
        <ul className="headerChange__other--list">
          <Link to="/education">
            <li>
              <img
                src={education}
                alt="education button"
                className="nav__img"
              />
            </li>
          </Link>
          <Link to="/game">
            <li>
              <img src={game} alt="game button" className="nav__img" />
            </li>
          </Link>
          <Link to="/recycling">
            <li>
              <img
                src={recycling}
                alt="recycling button"
                className="nav__img"
              />
            </li>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default HeaderChange;
