import "./EducationPlay.scss";
import Vids from "../Vids/Vids";
import photo from "../../assets/images/filler-vid.png";

function EducationPlay({ toggleClass }) {
  return (
    <div className={toggleClass}>
      <section className="educationPlay">
        <div className="educationPlay__div">
          <div className="educationPlay__video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HQZjouMTH08"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="educationPlay__title">Title of video</h2>
          <p className="educationPlay__info">
            Ada Byron was the only legitimate child of poet Lord Byron and
            mathematician Lady Byron.[5] All of Byron's other children were born
            out of wedlock to other women.[6] Byron separated from his wife a
            month after Ada was born and left England forever.
          </p>
          <p className="educationPlay__source">Ada Lovelace</p>
        </div>
        <div className="educationPlay__list"></div>
        <Vids image={photo} title={"title"} alt={"alt"} />
        <Vids image={photo} title={"title"} alt={"alt"} />
        <Vids image={photo} title={"title"} alt={"alt"} />
        <Vids image={photo} title={"title"} alt={"alt"} />
      </section>
    </div>
  );
}
export default EducationPlay;
