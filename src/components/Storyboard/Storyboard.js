import "./Storyboard.scss";
import homeBtn from "../../assets/icons/home-icon.svg";
import forwardBtn from "../../assets/icons/earth-forward-icon.png";

function Storyboard({ img, text, alt, clickHome, clickForward }) {
  return (
    <section className="storyboard">
      <div className="storyboard__img--div">
        <img className="storyboard__img" src={img} alt={alt} />
      </div>
      <div className="storyboard__text--div">
        <p className="storyboard__text">{text}</p>
      </div>
      <div className="direction">
        <button onClick={clickHome} className="direction__back">
          <img className="direction__icon" src={homeBtn} alt={"back button"} />
        </button>

        <button onClick={clickForward} className="direction__forward">
          <img
            className="direction__icon"
            src={forwardBtn}
            alt={"forward button"}
          />
        </button>
      </div>
    </section>
  );
}
export default Storyboard;
