import "./Finalokay.scss";
import img from "../../assets/images/mother-nature-good.png";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

function Finalokay({ score, text }) {
  let userName = sessionStorage.getItem("name");

  return (
    <section className="okay">
      <div className="okay__div">
        <h1 className="okay__score">{userName}'s score:</h1>

        <h2 className="okay__score--score">
          {Math.floor((score / 150) * 100)}%
        </h2>
        <img src={img} alt="mother nature sad" />
        <p className="okay__text">{text}</p>
        <div className="okay__navigate">
          <Link to="/game">
            <button className="okay__button">
              {" "}
              <p className="okay__p">{"Play Again"}</p>
            </button>
          </Link>
        </div>
      </div>
      <NavBar />
    </section>
  );
}
export default Finalokay;
