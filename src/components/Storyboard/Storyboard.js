import "./Storyboard.scss";
import forwardBtn from "../../assets/icons/earth-forward-icon.png";
import NavBar from "../NavBar/NavBar";

function Storyboard({ img, text, alt, clickHome, clickForward }) {
  return (
    <section className="storyboard">
      <div className="storyboard__img--div">
        <img
          className="storyboard__img"
          src={process.env.REACT_APP_API_SERVER_URL + img}
          alt={alt}
        />
      </div>
      <div className="storyboard__bottom">
        <div className="storyboard__text--div">
          <p className="storyboard__text">{text}</p>
        </div>
        <div className="direction">
          <button onClick={clickForward} className="direction__forward">
            <img
              className="direction__icon"
              src={forwardBtn}
              alt={"forward button"}
            />
          </button>
        </div>
      </div>
      <NavBar />
    </section>
  );
}
export default Storyboard;
