import { Link } from "react-router-dom";
import ButtonSm from "../ButtonSm/ButtonSm";
import "./QuestionSingle.scss";

function QuestionSingle({ question }) {
  return (
    <section className="single">
      <h1 className="single__title">Answer</h1>
      <div className="single__div">
        {question && (
          <div className="single__info">
            <p className="single__q">{question.questions}</p>
            <p className="single__a">{question.answer}</p>
          </div>
        )}
        <div className="single__button">
          <Link to="/education">
            <ButtonSm text={"Back"} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default QuestionSingle;
