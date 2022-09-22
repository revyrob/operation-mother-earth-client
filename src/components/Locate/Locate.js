import compass from "../../assets/icons/compass.png";
import "./Locate.scss";
import earth from "../../assets/images/earth.png";

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // console.log(position.coords.longitude);
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img
        className="locate__img"
        src={compass}
        alt={"compass icon - locate me"}
      />
    </button>
  );
}
export default Locate;
