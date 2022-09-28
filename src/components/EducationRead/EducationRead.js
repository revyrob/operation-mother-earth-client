import AskQuestions from "../AskQuestions/AskQuestions";
import "./EducationRead.scss";

function EducationRead({ toggleClass }) {
  return (
    <div className={toggleClass}>
      <section className="educationRead">
        <AskQuestions />
      </section>
    </div>
  );
}
export default EducationRead;
