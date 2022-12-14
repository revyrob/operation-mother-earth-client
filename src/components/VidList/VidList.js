import "./VidList.scss";
import Vids from "../Vids/Vids";

function VidList({ item, vidList }) {
  return (
    <section className="vidList">
      <h1 className="vidList__title">Video Library</h1>
      {vidList &&
        vidList
          .filter((vid) => vid.id !== item.id)
          .map((vid) => (
            <Vids
              id={vid._id}
              key={vid.id}
              title={vid.title}
              source={vid.source}
              image={vid.image}
            />
          ))}
    </section>
  );
}
export default VidList;
