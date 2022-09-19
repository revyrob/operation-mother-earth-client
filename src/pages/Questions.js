import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "rc-progress";

function Questions() {
  //   get questions and answer for game
  const getQuestions = () => {
    axios
      .get(`http://localhost:8080/gameQuestions`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  //get level by seeing if the current questions is divisble by 3
  const getLevel = () => {
    if (currentQuestion % 3) {
      setLevel(true);
    }
  };

  useEffect(() => {
    getQuestions();
    getLevel();
  }, []);

  const handleAnswerOptionClick = () => {
    //if selected answer is correct add point and the button turns green
    //else if selected answer is wrong don't add point and button turns red and
    //correct answer turns green
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [level, setLevel] = useState(false);
  const [fact, setFact] = useState(false);
  //show three levels equally when question is divisble by 3
  //show three facts when the question is divisble by 2
  return (
    <>
      {level ? (
        <Level />
      ) : (
        <div className="questions">
          <div className="questions__progressBar">
            <Line
              percent={((currentQuestion + 1) / questions.length) * 100}
              strokeWidth={4}
              strokeColor="#379683"
            />
          </div>
          <div className="questions__text">
            {questions && questions[currentQuestion].question}
          </div>
          <div className="questions__answers">
            {questions &&
              questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="questions__btn"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answer}
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
export default Questions;
