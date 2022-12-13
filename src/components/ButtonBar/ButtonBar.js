import "./ButtonBar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function ButtonBar({ text1, text2, link2, link1 }) {
  return (
    <div className="buttonBar">
      <HashLink to={link1}>
        <button className="buttonBar__button">
          {" "}
          <p className="buttonBar__text">{text1}</p>
        </button>
      </HashLink>

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
