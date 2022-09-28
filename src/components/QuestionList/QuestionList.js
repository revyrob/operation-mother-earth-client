import { Link } from "react-router-dom";

function QuestionList({ questions }) {
  console.log(questions);
  return (
    <>
      <h1>Questions</h1>
      <ul className="questions-list">
        {questions &&
          questions.map((question) => (
            <li key={question._id} className="questions-list__item">
              <Link
                to={`questions/${question._id}`}
                className="questions-list__link"
              >
                {question.questions}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
export default QuestionList;
