import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "rc-progress";
import { v4 as uuidv4 } from "uuid";
import Finalokay from "../components/Finalokay/Finalokay";
import NavBar from "../components/NavBar/NavBar";
import HeaderChange from "../components/HeaderChange/HeaderChange";

function Questions() {
  //use sessions storage for level
  const [questions, setQuestions] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [_level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(true);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  const getQuestions = () => {
    axios
      .get(`${REACT_APP_API_SERVER_URL}gameQuestions`)
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

    if (answerSelected === isCorrect) {
      answerTimer = setTimeout(() => {
        setAnswerCorrect(false);
      }, 200);
      setAnswerCorrect(true);

      if (!answerTimer) {
        answerTimer = setTimeout(() => {
          setAnswerCorrect(false);
        }, 200);
      } else {
        clearTimeout(answerTimer);
      }
    } else {
      setAnswerCorrect(false);
    }
    const nextQuestion = currentQuestion + 1;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [answerSelected]);

  return (
    <>
      <HeaderChange />
      {showScore ? (
        score <= 75 ? (
          <Finalokay
            score={score}
            text={
              "It means that the robots are okay but could use another update. Try the game again."
            }
          />
        ) : score <= 120 ? (
          <Finalokay
            score={score}
            text={"It means the robots still need help. Try the game again."}
          />
        ) : (
          <Finalokay
            score={score}
            text={
              "It means that the robots are well educated and you saved Mother Earth!"
            }
          />
        )
      ) : (
        <div className="homepage">
          <div className="questions__progressBar">
            <Line
              percent={((currentQuestion + 1) / questions.length) * 100}
              strokeWidth={4}
              strokeColor="#379683"
            />
          </div>
          <div className="questions__div">
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
                      answerOption.isCorrect && answerSelected && answerCorrect
                        ? "questions__btn--correct"
                        : "questions__btn"
                    }
                  >
                    {answerOption.answer}
                  </button>
                ))}
            </div>
          </div>
          <NavBar />
        </div>
      )}
    </>
  );
}
export default Questions;
