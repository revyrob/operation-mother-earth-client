import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        setQuestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getQuestionsById = (id) => {
    axios
      .get(`http://localhost:8080/education/questions/${id}`)
      .then((response) => {
        console.log("getQuestionById", response);
        setQuestion(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Questions</h1>
      {questionId !== undefined ? (
        <QuestionSingle question={joke} />
      ) : (
        <QuestionList allQuestions={allQuestions} />
      )}
    </div>
  );
}
export default AskQuestions;
