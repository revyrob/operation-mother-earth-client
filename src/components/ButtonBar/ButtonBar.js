import "./ButtonBar.scss";
import { Link } from "react-router-dom";

function ButtonBar({ text1, text2, link1, link2 }) {
  return (
    <div className="buttonBar">
      <Link to={link1}>
        <button className="buttonBar__button">
          {" "}
          <p className="buttonBar__text">{text1}</p>
        </button>
      </Link>

      <Link to={link2}>
        <button className="buttonBar__button1">
          {" "}
          <p className="buttonBar__text">{text2}</p>
        </button>
      </Link>
    </div>
  );
}
export default ButtonBar;
