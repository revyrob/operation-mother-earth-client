import "./BigGameBtn.scss";

function BigGameBtn({ img, alt, text, imgLrg, altLrg }) {
  return (
    <button className="bigGameBtn">
      <h2 className="bigGameBtn--text--top">{text}</h2>
      <img className="bigGameBtn--imgLrg" src={imgLrg} alt={altLrg} />
      <img className="bigGameBtn--img" src={img} alt={alt} />
      <h2 className="bigGameBtn--text--bottom">{text}</h2>
    </button>
  );
}
export default BigGameBtn;
