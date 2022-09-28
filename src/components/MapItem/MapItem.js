import "./MapItem.scss";

function MapItem({ title, address }) {
  return (
    <article className="mapItem">
      <h3 className="mapItem__title">{title}</h3>
      <p className="mapItem__address">{address}</p>
    </article>
  );
}
export default MapItem;
