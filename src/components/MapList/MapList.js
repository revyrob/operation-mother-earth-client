import "./MapList.scss";
import MapItem from "../MapItem/MapItem";

function MapList({ mapList }) {
  return (
    <section className="mapList">
      <h2 className="mapList__title">E-waste Drop-off Locations</h2>
      {mapList &&
        mapList.map((item) => (
          <MapItem
            key={item.id}
            title={item.title}
            address={item.address}
            city={item.city}
            country={item.country}
            phone={item.phone}
          />
        ))}
    </section>
  );
}
export default MapList;
