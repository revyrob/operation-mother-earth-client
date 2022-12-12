// import { Link } from "react-router-dom";
import { useState } from "react";
import "./QuestionList.scss";
import plus from "../../assets/images/plus-btn.svg";

function QuestionList({ questions }) {
  const [isShown, setIsShown] = useState(false);

  const toggleComment = (id) => {
    setIsShown((prev) =>
      Boolean(!prev[id]) ? { ...prev, [id]: true } : { ...prev, [id]: false }
    );
  };

  return (
    <section className="questionList">
      <div className="questionList__header">
        <h1 className="questionList__title">Questions & Answers</h1>
        <p className="questionList__p">
          Click on{" "}
          <img
            className="questionList__p--img"
            src={plus}
            alt={"plus drop down btn"}
          />{" "}
          to reveal the answer
        </p>
      </div>
      <ul className="questionList__list">
        {questions &&
          questions.map((question) => (
            <li key={question._id} className="questionList__list--item">
              <div className="questionList__wrapper">
                <img
                  onClick={() => toggleComment(question._id)}
                  className="questionList__list--plus"
                  src={plus}
                  alt={"plus drop down btn"}
                />
                <p className="questionList__list--p">{question.questions}</p>
              </div>
              {isShown[question._id] && (
                <div className="questionList__list--answer">
                  {question.answer}
                </div>
              )}
            </li>
          ))}
      </ul>
    </section>
  );
}
export default QuestionList;
