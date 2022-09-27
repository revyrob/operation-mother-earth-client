import { Link } from "react-router-dom";

function QuestionList({ questions }) {
  return (
    <ul className="questions-list">
      {questions &&
        questions.map((question) => (
          <li key={questions.id} className="questions-list__item">
            <Link
              to={`/questions/${questions.id}`}
              className="questions-list__link"
            >
              {questions.question}
            </Link>
          </li>
        ))}
    </ul>
  );
}
export default QuestionList;
