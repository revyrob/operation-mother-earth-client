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
import NavBar from "../components/NavBar/NavBar";

function Questions() {
  //use sessions storage for level
  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(true);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  let navigate = useNavigate();

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
    if ((currentQuestion + 1) / 3) {
      setLevel((currentQuestion + 1) / 3);
    }
  };

  const handleAnswerOptionClick = (isCorrect, points) => {
    let answerTimer;
    let questionTimer;

    setAnswerSelected(true);

    if (isCorrect) {
      setScore(score + points);
    }
    // console.log(`is correct is json ${isCorrect}`);

    if (answerSelected === isCorrect) {
      setAnswerCorrect(true);
      if (!answerTimer) {
        answerTimer = setTimeout(() => {
          setAnswerCorrect(false);
          // setAnswerSelected(false);
        }, 200);
      } else {
        clearTimeout(answerTimer);
      }
    } else {
      setAnswerCorrect(false);
    }
    // console.log(`is the correct ansewr ${answerSelected}`);
    // console.log(`testing ${answerCorrect}`);
    const nextQuestion = currentQuestion + 1;
    // if (
    //   nextQuestion / 3 === 1 ||
    //   nextQuestion / 3 === 2 ||
    //   nextQuestion / 3 === 3
    // ) {
    //   setCurrentQuestion(nextQuestion);
    //   // console.log(nextQuestion);
    //   // navigate("/game/level", nextQuestion);
    // }
    // if (currentQuestion % 2 && currentQuestion !== 0) {
    //   <Fact />;
    //   setCurrentQuestion(nextQuestion);
    // }
    if (nextQuestion < questions.length) {
      if (!questionTimer) {
        questionTimer = setTimeout(() => {
          setCurrentQuestion(nextQuestion);
        }, 1000);
      } else {
        clearTimeout(questionTimer);
      }
    } else {
      setTimeout(() => setShowScore(true), 300);
    }
  };

  useEffect(() => {
    getQuestions();
    getLevel();
  }, []);

  useEffect(() => {
    console.log("answerSelected", answerSelected);
  }, [answerSelected]);

  // console.log(score);
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
                  onClick={() =>
                    handleAnswerOptionClick(
                      answerOption.isCorrect,
                      answerOption.points
                    )
                  }
                  className={
                    answerSelected && answerCorrect && answerOption.isCorrect
                      ? "questions__btn--correct"
                      : "questions__btn"
                  }
                >
                  {answerOption.answer}
                </button>
              ))}
          </div>
          <NavBar />
        </div>
      )}
    </>
  );
}
export default Questions;
