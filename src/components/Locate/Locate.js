import compass from "../../assets/icons/compass.png";
import "./Locate.scss";

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
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
