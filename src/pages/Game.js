import NameGame from "../components/NameGame/NameGame";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Storyboard from "../components/Storyboard/Storyboard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NavBar from "../components/NavBar/NavBar";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //click forward goes to the next page
  const clickForward = () => {
    const nextStoryboard = currentStoryboard + 1;
    if (nextStoryboard < story.length) {
      setCurrentStoryboard(nextStoryboard);
    } else {
      navigate("/game/level");
    }
  };

  //create on click back goes to the previous page
  const clickBack = () => {
    const pastStoryboard = currentStoryboard - 1;
    if (pastStoryboard < story.length) {
      setCurrentStoryboard(pastStoryboard);
    }
    if (pastStoryboard === 0) {
      setStoryGame(false);
      window.location.reload();
    }
  };

  //click home goes to the homepage
  const clickHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="game">
        {showStory ? (
          <>
            <Storyboard
              img={`${REACT_APP_API_SERVER_URL}${story[currentStoryboard].image}`}
              //how to set name in here for first storyboard
              alt={story[currentStoryboard].alt}
              text={story[currentStoryboard].text}
              clickHome={clickHome}
              clickForward={clickForward}
              clickBack={clickBack}
              name={name}
            />
          </>
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
          </>
        )}
        <NavBar />
      </section>
    </>
  );
}
export default Game;
