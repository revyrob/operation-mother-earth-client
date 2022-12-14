import "./Storyboard.scss";

function Storyboard({ img, text, alt, clickForward, clickBack }) {
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
            Back
          </button>

          <button onClick={clickForward} className="direction__forward">
            Next
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
    </section>
  );
}
export default Storyboard;
