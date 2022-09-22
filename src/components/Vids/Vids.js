import "./Vids.scss";

function Vids({ image, title, category }) {
  return (
    <article className="vids">
      <div className="vids__img--div">
        <img className="vids__img" src={image} alt={title} />
      </div>
      <div className="vids__infoBar">
        <h3 className="vids__infoBar--title">{title}</h3>
        <p className="vids__infoBar--author">{category}</p>
      </div>
    </article>
  );
}
export default Vids;
