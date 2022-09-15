import TitleHeader from "../components/TitleHeader/TitleHeader";
import recycling from "../assets/icons/recycling-icon.svg";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import Map from "../components/Map/Map";

import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import axios from "axios";

import MapList from "../components/MapList/MapList";

function Recycling() {
  //this can post the lat lon to the backend so I get the correct data back
  useEffect(() => {
    axios
      .post(`http://localhost:8080/recycling/test`, {
        //need to change this to geolocation
        lat: "49.28507657283974",
        lon: "-123.11461581337777",
      })
      .then((response) => {
        console.log(response);
      });
  });

  const GOOGLE_API = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  //function on load
  const input = "e-waste recycling";
  const latBrain = "49.28507657283974";
  const lonBrain = "-123.11461581337777";

  //but this will reload with geolocation
  //set state of lat and long
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  //create a useEffect and get the map to load after the DOM
  // useEffect(() => {
  //   axios
  //     .get(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}`)
  //     // .then((response) => {
  //     //   setLat(latBrain);
  //     //   setLon(lonBrain);
  //     // })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: GOOGLE_API,
  // });

  // if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="recycling">
      <TitleHeader
        img={recycling}
        alt={"recycling icon"}
        text={"E-Waste Recycling Near You"}
      />
      <ButtonBar text={"+ Add a Center"} />
      <Map />
      <MapList />
    </section>
  );
}

export default Recycling;
