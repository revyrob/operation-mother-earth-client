import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "rc-progress";
import Level from "../components/Level/Level";
import Fact from "../components/Face/Fact";
import { v4 as uuidv4 } from "uuid";
import Finalimprove from "../components/Finalimprove/Finalimprove";
import Finalokay from "../components/Finalokay/Finalokay";
import Finalexcellent from "../components/Finalexcellent/Finalexcellent";
import { useNavigate } from "react-router-dom";

function Questions2() {
  // const [name, setName] = useState(" ");
  //   get questions and answer for game
  let navigate = useNavigate();

  const getQuestions = () => {
    axios
      .get(`http://localhost:8080/gameQuestions`)
      .then((response) => {
        console.log(response);
        setQuestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  //get level by seeing if the current questions is divisble by 3
  //   const getLevel = () => {
  //     if ((currentQuestion + 1) / 3) {
  //       setLevel((currentQuestion + 1) / 3);
  //     }
  //   };

  const handleAnswerOptionClick = (isCorrect, points) => {
    if (isCorrect) {
      setScore(score + points);
    }
    //if selected answer is correct add point and the button turns green
    //else if selected answer is wrong don't add point and button turns red and
    //correct answer turns green
    const nextQuestion = currentQuestion + 1;
    console.log(nextQuestion);
    console.log(currentQuestion);
    if (
      nextQuestion / 3 === 1 ||
      nextQuestion / 3 === 2 ||
      nextQuestion / 3 === 3
    ) {
      setCurrentQuestion(nextQuestion);
      navigate("/game/level");
    }
    // if (currentQuestion % 2 && currentQuestion !== 0) {
    //   <Fact />;
    //   setCurrentQuestion(nextQuestion);
    // }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      // (({ score } / 150) * 100 > 50) : <Improve
      // if  {
      //   <Improve />;
      // } else if (({ score } / 150) * 100 > 50) {
      //   <Okay />;
      // } else {
      //   <Excellent />;
      // }
    }
  };

  useEffect(() => {
    getQuestions();
    // getLevel();
  }, []);

  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [level, setLevel] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [bg, setBg] = useState("");
  const [showScore, setShowScore] = useState(false);
  console.log(score);

  //show three levels equally when question is divisble by 3
  //show three facts when the question is divisble by 2
  return (
    <>
      {showScore ? (
        score <= 75 ? (
          <Finalimprove score={score} />
        ) : score <= 120 ? (
          <Finalokay score={score} />
        ) : (
          <Finalexcellent score={score} />
        )
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
                  key={uuidv4()}
                  className="questions__btn"
                  onClick={() =>
                    setTimeout(() => {
                      handleAnswerOptionClick(
                        answerOption.isCorrect,
                        answerOption.points
                      );
                    }, "500")
                  }
                  // className={`questions__btn ${
                  //   answerOption.isCorrect === true && "questions__btn--correct"
                  // } `}
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
export default Questions2;
