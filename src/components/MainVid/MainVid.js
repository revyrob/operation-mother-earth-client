import "./MainVid.scss";

function MainVid({ item }) {
  return (
    <div className="mainVid__div">
      <div className="mainVid__video">
        <iframe
          width="100%"
          height="100%"
          src={item.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>

      <h2 className="mainVid__title">{item.title}</h2>
      <p className="mainVid__info">{item.description}</p>
      <p className="mainVid__source">{item.source}</p>
    </div>
  );
}

export default MainVid;
