import "./MapItem.scss";
import Address from "../Address/Address";

function MapItem({ title, address, location, location2 }) {
  return (
    <article className="mapItem">
      <h3 className="mapItem__title">{title}</h3>
      <p className="mapItem__address">{address}</p>
    </article>
  );
}
export default MapItem;
