import { Link } from "react-router-dom";
import "./QuestionList.scss";

function QuestionList({ questions }) {
  // const [isShown, setIsShown] = useState(true);

  // const onClick = () => {
  //   setIsShown(!isShown);
  // };

  return (
    <section className="questionList">
      <div className="questionList__header">
        <h1 className="questionList__title">Questions & Answers</h1>
        <p className="questionList__p">
          Click on a question to reveal the answer
        </p>
      </div>
      <ul className="questionList__list">
        {questions &&
          questions.map((question) => (
            <li key={question._id} className="questionList__list--item">
              <Link
                to={`questions/${question._id}`}
                className="questionList__list--link"
              >
                {/* <button onClick={onClick}>(isShown ? "Hide" : "Show"</button> */}
                {question.questions}
                {/* {isShown && <div>{answer.questions}</div>} */}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
export default QuestionList;
