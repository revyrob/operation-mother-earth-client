import "./MapItem.scss";
import Address from "../Address/Address";

function MapItem({ title, address, location, location2 }) {
  //split the address string with the below then map it through and array
  //with the indexes then through each index match the ones together for the address that need to go
  //together
  // const addressSplit = () => {
  //   const str = "";
  //   const result = str.split(/[, ]+/);
  //   return result;
  // };
  // console.log(addressSplit());

  return (
    <article className="mapItem">
      <h3 className="mapItem__title">{title}</h3>
      <p className="mapItem__address">{address}</p>
      {/* <p className="mapItem__address">
        {location}, {location2}
      </p> */}
    </article>
  );
}
export default MapItem;
