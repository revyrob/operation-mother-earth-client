import "./Finalimprove.scss";
import img from "../../assets/images/mother-nature-sad.png";

function Finalimprove({ score }) {
  return (
    <div className="improve">
      <h1 className="improve__score">
        Your score:{" "}
        <h1 className="excellent__score--score">
          {Math.floor((score / 150) * 100)}%
        </h1>
      </h1>
      <img src={img} alt="mother nature sad" />
      <p className="improve__text">
        It means the robots still need help. Try the game again.
      </p>
    </div>
  );
}
export default Finalimprove;
