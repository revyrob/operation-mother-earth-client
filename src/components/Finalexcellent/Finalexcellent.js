import "./Finalexcellent.scss";
import img from "../../assets/images/mother-nature-great.png";

function Finalexcellent({ score }) {
  return (
    <div className="excellent">
      <h1 className="excellent__score">
        Your score:
        <h1 className="excellent__score--score">
          {Math.floor((score / 150) * 100)}%
        </h1>
      </h1>
      <img src={img} alt="mother nature happy" />
      <p className="excellent__text">
        It means that the robots are well educated and can help Mother Earth
        improve!
      </p>
    </div>
  );
}
export default Finalexcellent;
