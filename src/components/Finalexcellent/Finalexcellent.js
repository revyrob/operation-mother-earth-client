import "./Finalexcellent.scss";
import img from "../../assets/images/mother-nature-great.png";
import home from "../../assets/icons/home-icon.svg";
import ButtonSm from "../ButtonSm/ButtonSm";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Finalexcellent({ score }) {
  let userName = sessionStorage.getItem("name");

  return (
    <div className="excellent">
      <h1 className="excellent__score">{userName}'s score:</h1>

      <h2 className="excellent__score--score">
        {Math.floor((score / 150) * 100)}%
      </h2>
      <img src={img} alt="mother nature happy" />
      <p className="excellent__text">
        It means that the robots are well educated and you saved Mother Earth!
      </p>
      {/* <div className="excellent__navigate">
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
      </div> */}
      <NavBar />
    </div>
  );
}
export default Finalexcellent;
