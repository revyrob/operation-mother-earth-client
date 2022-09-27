import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import QuestionList from "../QuestionList/QuestionList";
import QuestionSingle from "../QuestionSingle/QuestionSingle";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function AskQuestions() {
  const [questions, setQuestions] = useState(null);
  const [question, setQuestion] = useState(null);
  const { questionId } = useParams();

  //event handler for creating new comment
  const handleComment = (event) => {
    event.preventDefault();
    const question = event.target.question.value;

    const refreshPage = () => {
      window.location.reload();
    };

    axios
      .post(`http://localhost:8080/education/questions/new`, {
        question: question,
      })
      .then((response) => {
        if (question !== "") {
          alert("Thanks for adding to our list!");
          // setShow(true);
        } else {
          alert("You have not filled out the required input.");
        }
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      refreshPage();
    }, "500");
  };

  const getQuestions = () => {
    axios
      .get(`http://localhost:8080/education/questions`)
      .then((response) => {
        console.log("getQuestions", response.data);
        setQuestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getQuestionsById = (id) => {
    axios
      .get(`http://localhost:8080/education/questions/${id}`)
      .then((response) => {
        console.log("getQuestionById", response.data);
        setQuestion(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (questionId !== undefined) {
      getQuestionsById(questionId);
    } else {
      getQuestions();
    }
  }, [questionId]);

  return (
    <>
      <div>
        {questionId !== undefined ? (
          <QuestionSingle question={question} />
        ) : (
          <QuestionList questions={questions} />
        )}
      </div>

      <Formik
        initialValues={{ question: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form" method="post" onSubmit={handleComment}>
          <h1 className="form__header">Ask an E-waste Question</h1>
          <div className="form__form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="question"
                  required
                  fullWidth
                  id="question"
                  label="Question"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to="/">
                  <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Go to HomePage
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Form>
      </Formik>
    </>
  );
}
export default AskQuestions;
