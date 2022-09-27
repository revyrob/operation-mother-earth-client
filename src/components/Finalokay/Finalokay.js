import "./Finalokay.scss";
import img from "../../assets/images/mother-nature-good.png";
import ButtonSm from "../ButtonSm/ButtonSm";
import { Link } from "react-router-dom";

function Finalokay({ score }) {
  let userName = sessionStorage.getItem("name");

  return (
    <div className="okay">
      <h1 className="excellent__score">{userName}'s score:</h1>

      <h2 className="excellent__score--score">
        {Math.floor((score / 150) * 100)}%
      </h2>
      <img src={img} alt="mother nature sad" />
      <p className="okay__text">
        It means that the robots are okay but could use another update. Try the
        game again.
      </p>
      <div className="okay__buttons">
        <Link to="/">
          <ButtonSm text={"Home"} />
        </Link>
        <Link to="/game">
          <ButtonSm text={"Play Again"} />
        </Link>
      </div>
    </div>
  );
}
export default Finalokay;
