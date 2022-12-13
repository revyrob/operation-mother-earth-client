import "./ButtonBar.scss";

function ButtonBar({ text1, text2 }) {
  return (
    <div className="buttonBar">
      <button className="buttonBar__button">
        {" "}
        <p className="buttonBar__text">{text1}</p>
      </button>

      <button className="buttonBar__button1">
        {" "}
        <p className="buttonBar__text">{text2}</p>
      </button>
    </div>
  );
}
export default ButtonBar;
