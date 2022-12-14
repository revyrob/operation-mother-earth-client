import "./Vids.scss";
import { Link } from "react-router-dom";

function Vids({ image, title, source, id }) {
  return (
    <Link to={`/education/${id}`}>
      <article className="vids ">
        <div className="vids__img--div ">
          <img
            className="vids__img "
            src={process.env.REACT_APP_API_SERVER_URL + image}
            alt={title}
          />
        </div>
        <div className="vids__infoBar">
          <h5 className="vids__title">{title}</h5>
          <p className="vids__author">{source}</p>
        </div>
      </article>
    </Link>
  );
}
export default Vids;
