import "./Level.scss";
import earth from "../../assets/images/earth.png";
import { Link } from "react-router-dom";

function Level({ level }) {
  return (
    <div className="level">
      <Link to="/game/questions">
        <img className="level__img" src={earth} alt="earth" />
      </Link>
      <h1 className="level__text">Level {level}</h1>
    </div>
  );
}
export default Level;
