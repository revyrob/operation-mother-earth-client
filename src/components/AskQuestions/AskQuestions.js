import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import QuestionList from "../QuestionList/QuestionList";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./AskQuestions.scss";
import Modal from "react-bootstrap/Modal";
import Button1 from "react-bootstrap/Button";

function AskQuestions() {
  const [questions, setQuestions] = useState(null);
  // const [question, setQuestion] = useState(null);
  // const { questionId } = useParams();
  const [show, setShow] = useState(false);

  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  const refreshPage = () => {
    window.location.reload();
  };

  const handleClose = () => {
    refreshPage();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  //sets the name for user
  // const setNameHandler = (e) => {
  //   const userName = e.target.name.value;
  //   e.preventDefault();
  //   if (userName === "") {
  //     setShow(true);
  //     e.preventDefault();
  //   } else {
  //     setName(userName);
  //     setStoryGame(true);
  //   }
  // };

  //event handler for creating new comment
  const handleComment = (event) => {
    event.preventDefault();
    const question = event.target.question.value;
    if (question !== "") {
      setShow(true);
      event.preventDefault();
    }

    axios
      .post(`${REACT_APP_API_SERVER_URL}education/questions/new`, {
        question: question,
      })
      .then((response) => {
        if (question !== "") {
          // alert("Thanks for adding to our list!");
          setShow(true);
        } else {
          alert("You have not filled out the required input.");
        }
      })
      .catch((err) => console.log(err));
    // setTimeout(() => {
    //   refreshPage();
    // }, "1000");
  };

  const getQuestions = () => {
    axios
      .get(`${REACT_APP_API_SERVER_URL}education/questions`)
      .then((response) => {
        // console.log("getQuestions", response.data);
        setQuestions(response.data);
      })
      .catch((err) => console.log(err));
  };

  // const getQuestionsById = (id) => {
  //   axios
  //     .get(`${REACT_APP_API_SERVER_URL}education/questions/${id}`)
  //     .then((response) => {
  //       console.log("getQuestionById", response.data);
  //       setQuestion(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    // if (questionId !== undefined) {
    //   getQuestionsById(questionId);
    // } else {
    getQuestions();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <QuestionList questions={questions} />
      <h1 className="form__header">Ask an E-waste Question</h1>
      <Formik
        initialValues={{ question: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form" method="post" onSubmit={handleComment}>
          <div className="form__form">
            <TextField
              name="question"
              required
              fullWidth
              id="question"
              label="Question"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="form__button"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Formik>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks for your question!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Check back tomorrow for an answer to your question.
        </Modal.Body>
        <Modal.Footer>
          <Button1 variant="primary" onClick={handleClose}>
            Ok👌
          </Button1>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AskQuestions;
