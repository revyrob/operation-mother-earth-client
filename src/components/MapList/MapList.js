import "./MapList.scss";
import MapItem from "../MapItem/MapItem";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

function MapList({ mapList }) {
  // console.log(mapList[0].vicinity);
  const [listItems, setListItems] = useState(false);

  function getList() {
    if (mapList === 0) {
      setListItems(true);
    }
  }

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mapList">
      <div className="mapList__div">
        <div className="mapList__title--div">
          <h2 className="mapList__title">E-waste Drop-off Locations</h2>
        </div>

        {listItems ? (
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
        ) : (
          <div>Sorry there are no e-waste centers</div>
        )}
      </div>
    </section>
  );
}
export default MapList;
