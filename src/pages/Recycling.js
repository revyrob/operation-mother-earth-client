import TitleHeader from "../components/TitleHeader/TitleHeader";
import recycling from "../assets/icons/recycling-icon.svg";
import ButtonBar from "../components/ButtonBar/ButtonBar";
// import Map from "../components/Map/Map";

import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import axios from "axios";

import MapList from "../components/MapList/MapList";

export default function Recycling() {
  //state for map list
  const [mapList, setMapList] = useState(null);
  //state for markers that come up
  const [markers, setMarkers] = useState(null);

  //get recycling centers data, pass it to the Hook
  //and pass it to the MapList
  const getMapInfo = () => {
    axios
      .get(`http://localhost:8080/recycling`)
      .then((response) => {
        setMapList(response.data);
        setMarkers(response.data);
        // console.log(response);
      })
      .catch((err) => console.log(err));
  };

  // this can post the lat lon to the backend so I get the correct data back
  // const mapTest = () => {
  //   axios
  //     .post(`http://localhost:8080/recycling/test`, {
  //       //need to change this to geolocation
  //       lat: "49.28507657283974",
  //       lon: "-123.11461581337777",
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //work on getting mocktail data once server is running
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
      <Map />
      <MapList mapList={mapList} />
    </section>
  );
}

//I had trouble making it into it's own component it is now here
function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 49.2786062, lng: -123.0999113 }}
      mapContainerClassName="map__google"
    ></GoogleMap>
  );
}
