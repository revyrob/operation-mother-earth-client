import "./Map.scss";
import { GoogleMap } from "@react-google-maps/api";

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 49.2786062, lng: -123.0999113 }}
      mapContainerClassName="map"
    ></GoogleMap>
  );
}
export default Map;

//couple higher order components and wrapping a few different layers
// const WrappedMap = withScriptjs(withGoogleMap(Map));
