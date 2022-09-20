import "./Finalokay.scss";
import img from "../../assets/images/mother-nature-good.png";

function Finalokay({ score }) {
  return (
    <div className="okay">
      <h1 className="okay__score">
        Your score:{" "}
        <h1 className="excellent__score--score">
          {Math.floor((score / 150) * 100)}%
        </h1>
      </h1>
      <img src={img} alt="mother nature sad" />
      <p className="okay__text">
        It means that the robots are okay but could use another update. Try the
        game again!{" "}
      </p>
    </div>
  );
}
export default Finalokay;
