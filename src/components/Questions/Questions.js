import { useState, useEffect } from "react";
import axios from "axios";

function Questions() {
  //get questions and answer for game
  const questions = () => {
    axios
      .get(`http://localhost:8080/game`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    questions();
  }, []);

  console.log(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <></>
    // <div className="questions">
    //   <div className="question__section">
    //     <div className="question__progressBar">
    //       <div className="question__progress" style={{"width":{currentQuestion} + 1}/{questions.length}}>
    //       </div>
    //       <div className="question__text">{questions[currentQuestion].question}</div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Questions;
