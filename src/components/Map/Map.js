import "./Map.scss";
import { GoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 49.28507657283974, lng: -123.11461581337777 }}
    />
  );
}
export default Map;

<section className="map">
  <h2>Map</h2>
  <div className="map__google"></div>
  <h2>E-waste Centers</h2>
  <div className="map__selection"></div>
</section>;
