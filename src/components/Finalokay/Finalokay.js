import "./Finalokay.scss";
import img from "../../assets/images/mother-nature-good.png";
import ButtonSm from "../ButtonSm/ButtonSm";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Finalokay({ score }) {
  let userName = sessionStorage.getItem("name");

  return (
    <div className="okay">
      <h1 className="excellent__score">{userName}'s score:</h1>

      <h2 className="excellent__score--score">
        {Math.floor((score / 150) * 100)}%
      </h2>
      <img
        src={process.env.REACT_APP_API_SERVER_URL + img}
        alt="mother nature sad"
      />
      <p className="okay__text">
        It means that the robots are okay but could use another update. Try the
        game again.
      </p>
      <div className="okay__buttons">
        <Link to="/game">
          <ButtonSm className="okay__btn" text={"Play Again"} />
        </Link>
      </div>
      <NavBar />
    </div>
  );
}
export default Finalokay;
