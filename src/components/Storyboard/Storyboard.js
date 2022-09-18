import "./Storyboard.scss";

function Storyboard({ img, text, alt }) {
  return (
    <section className="storyboard">
      <div className="storyboard__img--div">
        <img className="storyboard__img" src={img} alt={alt} />
      </div>
      <div className="storyboard__text--div">
        <p className="storyboard__text">{text}</p>
      </div>
    </section>
  );
}
export default Storyboard;
