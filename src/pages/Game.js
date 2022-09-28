import NameGame from "../components/NameGame/NameGame";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Storyboard from "../components/Storyboard/Storyboard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Game() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [showStory, setStoryGame] = useState(false);
  const [story, setStory] = useState(" ");
  const [currentStoryboard, setCurrentStoryboard] = useState(0);

  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  sessionStorage.setItem("name", name);
  let navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //sets the name for user
  const setNameHandler = (e) => {
    const userName = e.target.name.value;
    e.preventDefault();
    if (userName === "") {
      setShow(true);
      e.preventDefault();
    } else {
      setName(userName);
      setStoryGame(true);
    }
  };

  //get questions and answer for game
  const getQuestions = () => {
    axios
      .get(`${REACT_APP_API_SERVER_URL}gameQuestions`)
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const getStory = () => {
    axios
      .get(`${REACT_APP_API_SERVER_URL}gameStory`)
      .then((response) => {
        setStory(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuestions();
    getStory();
  }, []);

  //create on click forward goes to the next page
  //it also goes to the next storyboard info
  const clickForward = () => {
    const nextStoryboard = currentStoryboard + 1;
    if (nextStoryboard < story.length) {
      setCurrentStoryboard(nextStoryboard);
    } else {
      navigate("/game/level");
    }
  };

  //create onclick back goes to the previous page
  //goes back in storyboard info
  const clickHome = () => {
    navigate("/");
  };

  return (
    <>
      {showStory ? (
        <Storyboard
          img={`${REACT_APP_API_SERVER_URL}${story[currentStoryboard].image}`}
          //how to set name in here for first storyboard
          alt={story[currentStoryboard].alt}
          text={story[currentStoryboard].text}
          clickHome={clickHome}
          clickForward={clickForward}
          name={name}
        />
      ) : (
        <>
          <NameGame nameHandler={setNameHandler} />
          <Modal show={show} onHide={handleShow}>
            <Modal.Header closeButton>
              <Modal.Title>Oops!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You have not entered a username.</Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button> */}
              <Button variant="primary" onClick={handleClose}>
                Got it👍
              </Button>
            </Modal.Footer>
          </Modal>
          ;
        </>
      )}
    </>
  );
}
export default Game;
