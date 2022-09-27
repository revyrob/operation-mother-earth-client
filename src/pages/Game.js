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

  sessionStorage.setItem("name", name);
  // const [name, setName] = useState(" ");
  let navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //sets the name for user
  const setNameHandler = (e) => {
    const userName = e.target.name.value;
    e.preventDefault();
    //??I am not sure why this isn't testing??
    if (userName === "") {
      setShow(true);
      // alert("Enter a username");
      e.preventDefault();
    } else {
      setName(userName);
      setStoryGame(true);
    }
  };

  //get questions and answer for game
  const getQuestions = () => {
    axios
      .get(`http://localhost:8080/gameQuestions`)
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const getStory = () => {
    axios
      //??the images are not showing up??
      .get(`http://localhost:8080/gameStory`)
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

  //style for modal
  // const bg = {
  //   overlay: {
  //     background: "rgba(19, 24, 44, .6)",
  //   },
  //   content: {
  //     width: "42rem",
  //     height: "16.375rem",
  //     margin: "5.3125rem auto 0",
  //     display: "flex",
  //     flexDirection: "column",
  //     justifyContent: "space-between",
  //     boxShadow: "0px 2px 5px rgba(19, 24, 44, 0.1)",
  //     borderRadius: "3px",
  //   },
  // };
  return (
    <>
      {showStory ? (
        <Storyboard
          img={`http://localhost:8080/${story[currentStoryboard].image}`}
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
