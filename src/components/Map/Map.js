import "./Map.scss";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

function Map() {
  const GOOGLE_API = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <LoadScript googleMapsApiKey={GOOGLE_API} />
      <GoogleMap
        zoom={10}
        center={{ lat: 49.2786062, lng: -123.0999113 }}
        mapContainerClassName="map"
      ></GoogleMap>
    </>
  );
}
export default Map;

//couple higher order components and wrapping a few different layers
// const WrappedMap = withScriptjs(withGoogleMap(Map));
