import TitleHeader from "../components/TitleHeader/TitleHeader";
import recycling from "../assets/icons/recycling-icon.svg";
import ButtonBar from "../components/ButtonBar/ButtonBar";

import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import PracticeForm from "../components/PracticeForm/PracticeForm";
import AddCenter from "../components/AddCenter/AddCenter";
import { useRef } from "react";

export default function Recycling() {
  //state for map list
  const [mapList, setMapList] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 49.0781,
    lng: -117.8,
  });

  //get recycling centers data, pass it to the Hook
  //and pass it to the MapList
  const getMapInfo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setCurrentLocation({ lat: userLat, lng: userLng });

        axios
          .get(`http://localhost:8080/recycling?location=${userLat},${userLng}`)
          .then((response) => {
            setMapList(response.data);
          })
          .catch((err) => console.log(err));
      });
    } else {
      //alert!
      alert(`Geolocation is not supported by your browser.`);
    }
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
      <ButtonBar text={"Center's Around Me"} />
      <Map mapList={mapList} currentLocation={currentLocation} />
      {/* <AddCenter /> */}
      {/* <MapList mapList={mapList} /> */}
      <PracticeForm />
    </section>
  );
}

//I had trouble making it into it's own component it is now here
function Map({ mapList, currentLocation }) {
  // console.log(mapList);
  console.log(currentLocation);
  const [selectedMarker, setSelectedMarker] = useState();
  let [infoOpen, setInfoOpen] = useState(false);

  //use refs for map
  const mapRef = useRef();

  return (
    <>
      <GoogleMap
        ref={mapRef}
        zoom={13}
        center={{ lat: currentLocation.lat, lng: currentLocation.lng }}
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
