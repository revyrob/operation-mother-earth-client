import "./MapItem.scss";

function MapItem({ title, address, city, country, phone }) {
  return (
    <article className="mapItem">
      <h3 className="mapItem__info--title">{title}</h3>
      <p className="mapItem__info--address">{address}</p>
      <p className="mapItem__info--address">{city}</p>
      <p className="mapItem__info--address">{country}</p>
      <p className="mapItem__info--address">{phone}</p>
    </article>
  );
}
export default MapItem;
