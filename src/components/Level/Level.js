import "./Level.scss";
import earth from "../../assets/images/earth.png";
import { Link, Navigate } from "react-router-dom";

function Level({ nextQuestion }) {
  let userName = sessionStorage.getItem("name");
  return (
    <div className="level">
      <Link to="/game/questions">
        <img className="level__img" src={earth} alt="earth" />
      </Link>
      <h1 className="level__text">Good luck {userName}</h1>
    </div>
  );
}
export default Level;
