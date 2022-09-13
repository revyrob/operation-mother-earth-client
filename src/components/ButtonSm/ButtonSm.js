import "./ButtonSm.scss";

function ButtonSm({ text }) {
  return (
    <button className="btnSm">
      <h3 className="btnSm--text">{text}</h3>
    </button>
  );
}
export default ButtonSm;
