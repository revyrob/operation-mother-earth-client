import "./VidList.scss";
import Vids from "../Vids/Vids";

function VidList({ item, vidList }) {
  //   console.log(mainVid);
  //   console.log(vidList);
  return (
    <section className="vidList">
      <h2 className="vidList__title">VIDEO LIBRARY</h2>
      {vidList &&
        vidList
          .filter((vid) => vid.id !== item.id)
          .map((vid) => (
            <Vids
              id={vid.id}
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
