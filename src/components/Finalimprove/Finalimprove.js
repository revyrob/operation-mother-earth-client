import "./Finalimprove.scss";
import img from "../../assets/images/mother-nature-sad.png";
import home from "../../assets/icons/home-icon.svg";
import ButtonSm from "../ButtonSm/ButtonSm";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Finalimprove({ score }) {
  let userName = sessionStorage.getItem("name");

  return (
    <div className="improve">
      <h1 className="excellent__score">{userName}'s score:</h1>

      <h2 className="excellent__score--score">
        {Math.floor((score / 150) * 100)}%
      </h2>
      <img className="excellent__ing" src={img} alt="mother nature sad" />
      <p className="improve__text">
        It means the robots still need help. Try the game again.
      </p>
      <div className="excellent__navigate">
        <div className="excellent__buttons">
          <Link to="/game">
            <ButtonSm text={"Play Again"} />
          </Link>
        </div>
        <Link to="/">
          <div className="excellent__home">
            <img
              className="direction__icon"
              src={home}
              alt={"forward button"}
            />
          </div>
        </Link>
      </div>
      <NavBar />
    </div>
  );
}
export default Finalimprove;
