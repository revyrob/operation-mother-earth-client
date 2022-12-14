import home from "../../assets/icons/home-icon.svg";
import education from "../../assets/icons/books-icon.svg";
import game from "../../assets/icons/game-icon.svg";
import recycling from "../../assets/icons/recycling-icon.svg";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <section className="nav">
      <div className="phantomStyle" />
      <div className="nav__style">
        <Link to="/">
          <div className="nav__div">
            <img src={home} alt="home button" className="nav__img" />
            <p className="nav__subtitle">Home</p>
          </div>
        </Link>
        <Link to="/education">
          <div className="nav__div">
            <img src={education} alt="education button" className="nav__img" />
            <p className="nav__subtitle">Education</p>
          </div>
        </Link>
        <Link to="/game">
          <div className="nav__div">
            <img src={game} alt="game button" className="nav__img" />
            <p className="nav__subtitle">Game</p>
          </div>
        </Link>
        <Link to="/recycling">
          <div className="nav__div">
            <img src={recycling} alt="recycling button" className="nav__img" />
            <p className="nav__subtitle">Centers</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
export default NavBar;
