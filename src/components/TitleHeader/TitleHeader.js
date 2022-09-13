import "./TitleHeader.scss";

function TitleHeader({ img, alt, text }) {
  return (
    <section className="titleHeader">
      <h1 className="titleHeader__title">{text}</h1>
      <img className="titleHeader__icon" src={img} alt={alt} />
    </section>
  );
}
export default TitleHeader;
