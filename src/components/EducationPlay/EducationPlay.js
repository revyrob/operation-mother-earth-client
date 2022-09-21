import "./EducationPlay.scss";

function EducationPlay({ toggleClass }) {
  return (
    <div className={toggleClass}>
      <section className="educationPlay">
        <div className="educationPlay__div">
          <div className="educationPlay__video"></div>
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
      </section>
    </div>
  );
}
export default EducationPlay;
