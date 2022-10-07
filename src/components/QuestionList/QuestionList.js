import { Link } from "react-router-dom";
import { useState } from "react";
import "./QuestionList.scss";
import plus from "../../assets/images/plus-btn.svg";

function QuestionList({ questions }) {
  const [isShown, setIsShown] = useState(true);

  const onClick = () => {
    setIsShown(!isShown);
  };

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
              <img
                onClick={onClick}
                className="questionList__list--plus"
                src={plus}
                alt={"plus drop down btn"}
              />
              {/* {isShown ? "Hide" : "Show"} */}

              {question.questions}
              {isShown && <div>{question.answer}</div>}
            </li>
          ))}
      </ul>
    </section>
  );
}
export default QuestionList;
