import "./Finalimprove.scss";
import img from "../../assets/images/mother-nature-sad.png";
import { Link } from "react";

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
        It means the robots still need help. Try the game{" "}
        <a href="/game"> again. </a>
      </p>
    </div>
  );
}
export default Finalimprove;
