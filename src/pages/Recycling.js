import TitleHeader from "../components/TitleHeader/TitleHeader";
import recycling from "../assets/icons/recycling-icon.svg";
import ButtonBar from "../components/ButtonBar/ButtonBar";
import Map from "../components/Map/Map";
import { useEffect } from "react";
import axios from "axios";

function Recycling() {
    
    //create a useEffect and get the map to load after the DOM
    //no search handler
    //but this will reload with geolocation
    
    const { 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY' } = process.env;
    
    useEffect(() => {
        axios
        .get(
            `https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=${input}&types=restaurant&location=49.28507657283974,-123.11461581337777&radius=500&key=${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
        },[])
        
        return (
            <>
            <TitleHeader
            img={recycling}
            alt={"recycling icon"}
            text={"E-Waste Recycling Near You"}
            />
            <ButtonBar text={"+ Add a Center"} />
            <Map />
            </>
            );
        }
        
        export default Recycling;
        