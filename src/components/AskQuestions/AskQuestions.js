import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import QuestionList from "../QuestionList/QuestionList";
import QuestionSingle from "../QuestionSingle/QuestionSingle";

function AskQuestions() {
  const [questions, setQuestions] = useState(null);
  const [question, setQuestion] = useState(null);
  const { questionId } = useParams();

  useEffect(() => {
    if (questionId !== undefined) {
      getQuestionsById(questionId);
    } else {
      getQuestions();
    }
  }, [questionId]);

  const getQuestions = () => {
    axios
      .get(`http://localhost:8080/education/questions`)
      .then((response) => {
        console.log("getQuestions", response);
        setQuestions(response);
      })
      .catch((err) => console.log(err));
  };

  getQuestions();
  const getQuestionsById = (id) => {
    axios
      .get(`http://localhost:8080/education/questions/${id}`)
      .then((response) => {
        console.log("getQuestionById", response);
        setQuestion(response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Questions</h1>
      {questionId !== undefined ? (
        <QuestionSingle question={question} />
      ) : (
        <QuestionList allQuestions={questions} />
      )}
    </div>
  );
}
export default AskQuestions;
