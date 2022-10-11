import "./Storyboard.scss";
import forwardBtn from "../../assets/icons/earth-forward-icon.png";
import home from "../../assets/icons/home-icon.svg";
import NavBar from "../NavBar/NavBar";

function Storyboard({ img, text, alt, clickHome, clickForward, clickBack }) {
  return (
    <section className="storyboard">
      <div className="storyboard__img--div">
        <img className="storyboard__img" src={img} alt={alt} />
      </div>
      <div className="storyboard__bottom">
        <div className="storyboard__text--div">
          <p className="storyboard__text">{text}</p>
        </div>
        <div className="direction">
          <button onClick={clickBack} className="direction__back">
            <img
              className="direction__icon--reverse"
              src={forwardBtn}
              alt={"forward button"}
            />
          </button>
          <button onClick={clickHome} className="direction__home">
            <img
              className="direction__icon"
              src={home}
              alt={"forward button"}
            />
          </button>
          <button onClick={clickForward} className="direction__forward">
            <img
              className="direction__icon"
              src={forwardBtn}
              alt={"forward button"}
            />
          </button>
        </div>
        <div className="direction__artist">
          <p className="direction__artistName">
            Art by:{" "}
            <a
              className="direction__artistName--name"
              href="https://dribbble.com/maryiiaz"
            >
              Maryja Zajko
            </a>
          </p>
        </div>
      </div>

      <NavBar />
    </section>
  );
}
export default Storyboard;
