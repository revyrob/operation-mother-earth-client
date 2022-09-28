import home from "../../assets/icons/home-icon.svg";
import education from "../../assets/icons/books-icon.svg";
import game from "../../assets/icons/game-icon.svg";
import recycling from "../../assets/icons/recycling-icon.svg";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <div className="phantomStyle" />
      <div className="nav__style">
        <Link to="/">
          <img src={home} alt="home button" className="nav__img" />
        </Link>
        <Link to="/education">
          <img src={education} alt="education button" className="nav__img" />
        </Link>
        <Link to="/game">
          <img src={game} alt="game button" className="nav__img" />
        </Link>
        <Link to="/recycling">
          <img src={recycling} alt="recycling button" className="nav__img" />
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
