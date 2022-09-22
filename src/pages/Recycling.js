import TitleHeader from "../components/TitleHeader/TitleHeader";
import recycling from "../assets/icons/recycling-icon.svg";
import ButtonBar from "../components/ButtonBar/ButtonBar";
// import Map from "../components/Map/Map";

import compass from "../assets/icons/compass.png";

import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import MapList from "../components/MapList/MapList";
import { useCallback, useRef } from "react";

export default function Recycling() {
  //state for map list
  const [mapList, setMapList] = useState(null);

  //get recycling centers data, pass it to the Hook
  //and pass it to the MapList
  const getMapInfo = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.longitude);
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      console.log(userLat);
      axios
        .get(`http://localhost:8080/recycling`, {
          params: {
            location: { userLat, userLng },
          },
        })
        .then((response) => {
          setMapList(response.data);
        })
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    getMapInfo();
  }, []);

  //for loading the googlemap with the google map api key
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  //if map isn't loading
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="recycling">
      <TitleHeader
        img={recycling}
        alt={"recycling icon"}
        text={"E-Waste Recycling Near You"}
      />
      <ButtonBar text={"+ Add a Center"} />
      <Map mapList={mapList} />
      <MapList mapList={mapList} />
    </section>
  );
}

//I had trouble making it into it's own component it is now here
function Map({ mapList }) {
  // console.log(mapList);
  const [selectedMarker, setSelectedMarker] = useState();
  let [infoOpen, setInfoOpen] = useState(false);

  //use refs for map
  const mapRef = useRef();

  return (
    <>
      <GoogleMap
        ref={mapRef}
        zoom={10}
        center={{ lat: 49.0781, lng: -117.8 }}
        mapContainerClassName="map__google"
      >
        {mapList &&
          mapList.map((item) => (
            <Marker
              key={uuidv4()}
              position={{
                lat: item.geometry.location.lat,
                lng: item.geometry.location.lng,
              }}
              onClick={() => {
                setSelectedMarker(item);
                setInfoOpen(true);
                console.log(selectedMarker);
              }}
              icon={{
                url: "/recycle-pin.png",
                scaledSize: new window.google.maps.Size(25, 25),
              }}
            />
          ))}

        {selectedMarker && infoOpen && (
          <InfoWindow
            position={{
              lat: selectedMarker.geometry.location.lat,
              lng: selectedMarker.geometry.location.lng,
            }}
            onCloseClick={() => {
              console.log("window closed");
              setInfoOpen(false);
              console.log(selectedMarker);
            }}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              <p>{selectedMarker.formatted_address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
}
