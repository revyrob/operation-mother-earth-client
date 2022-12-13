import "./MapList.scss";
import MapItem from "../MapItem/MapItem";
import { v4 as uuidv4 } from "uuid";

function MapList({ mapList }) {
  return (
    <section id="list" className="mapList">
      <div className="mapList__div">
        <div className="mapList__title--div">
          <h2 className="mapList__title">E-waste Drop-off Locations</h2>
        </div>

        <div>
          {mapList &&
            mapList.map((item) => (
              <MapItem
                key={uuidv4()}
                title={item.name}
                address={item.vicinity}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
export default MapList;
