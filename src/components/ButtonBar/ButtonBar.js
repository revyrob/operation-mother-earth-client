import "./ButtonBar.scss";

function ButtonBar({ text }) {
  return (
    <div className="buttonBar">
      <button className="buttonBar__button">
        {" "}
        <p className="buttonBar__text">{text}</p>
      </button>
    </div>
  );
}
export default ButtonBar;
