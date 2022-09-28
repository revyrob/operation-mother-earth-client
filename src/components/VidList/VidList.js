import "./VidList.scss";
import Vids from "../Vids/Vids";

function VidList({ item, vidList }) {
  return (
    <section className="vidList">
      <h2 className="vidList__title">VIDEO LIBRARY</h2>
      {vidList &&
        vidList
          .filter((vid) => vid.id !== item.id)
          .map((vid) => (
            <Vids
              id={vid._id}
              key={vid.id}
              title={vid.title}
              source={vid.source}
              image={process.env.REACT_APP_API_SERVER_URL + vid.image}
            />
          ))}
    </section>
  );
}
export default VidList;
