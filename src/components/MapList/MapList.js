import "./MapList.scss";
import MapItem from "../MapItem/MapItem";
import { v4 as uuidv4 } from "uuid";

function MapList({ mapList }) {
  console.log(mapList);
  return (
    <section className="mapList">
      <h2 className="mapList__title">E-waste Drop-off Locations</h2>

      {mapList &&
        mapList.map((item) => (
          <MapItem
            key={uuidv4()}
            title={item.name}
            address={item.formatted_address}
          />
        ))}
    </section>
  );
}
export default MapList;
