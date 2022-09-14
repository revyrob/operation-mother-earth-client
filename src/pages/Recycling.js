import TitleHeader from "../components/TitleHeader/TitleHeader";
import recycling from "../assets/icons/recycling-icon.svg";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import Map from "../components/Map/Map";

import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { useEffect } from "react";
import axios from "axios";

function Recycling() {
  //create a useEffect and get the map to load after the DOM
  //no search handler
  //but this will reload with geolocation
  const GOOGLE_API = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  //function on load
  const input = "e-waste recycling";
  const lat = "49.28507657283974";
  const lon = "-123.11461581337777";

  //why is it not console logging the response.data
  //i am getting a cors error
  //use state to create list with whatever is in the google json
  //const [list, setList] = useState([]);
  //useEffect(() => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1500&keyword=${input}&key=${GOOGLE_API}`
    )
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      //const listItem = {
      //name: name of business,
      //address:
      //phone number
      //};
      //setList((prev) => [..., listItem]);
    })
    .catch(function (error) {
      console.log(error);
    });
  //}, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  // return <Map />;

  return (
    <section className="recycling">
      <TitleHeader
        img={recycling}
        alt={"recycling icon"}
        text={"E-Waste Recycling Near You"}
      />
      <ButtonBar text={"+ Add a Center"} />
      <Map />
    </section>
  );
}

export default Recycling;
