import { Link } from "react-router-dom";
import ButtonSm from "../ButtonSm/ButtonSm";

function QuestionSingle({ question }) {
  return (
    <div className="single">
      <h1>Q&A</h1>
      {question && (
        <>
          <p className="">{question.questions}</p>
          <p className="">{question.answer}</p>
        </>
      )}
      <div className="">
        <Link to="/education">
          <ButtonSm text={"Back"} />
        </Link>
      </div>
    </div>
  );
}
export default QuestionSingle;
