import NameGame from "../components/NameGame/NameGame";
import { useState, useEffect, Link } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Storyboard from "../components/Storyboard/Storyboard";

function Game() {
  // const [name, setName] = useState(" ");
  let navigate = useNavigate();

  //sets the name for user
  const setNameHandler = (e) => {
    const userName = e.target.name.value;
    console.log(userName);
    //??I am not sure why this isn't testing??
    if (typeof userName === "string" || userName instanceof String) {
      setName(userName);
      setStoryGame(true);
    } else {
      alert("Enter a username");
    }
  };

  //get questions and answer for game
  const getQuestions = () => {
    axios
      .get(`http://localhost:8080/gameQuestions`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuestions();
  }, []);

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
    getStory();
  }, []);

  const [story, setStory] = useState(" ");
  const [currentStoryboard, setCurrentStoryboard] = useState(0);

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

  const [name, setName] = useState("");
  const [showStory, setStoryGame] = useState(false);

  console.log(name);

  //write an if statement if there is a name in the state go to the questions
  return (
    <>
      {showStory ? (
        <Storyboard
          // img={story[currentStoryboard].image}
          //how to set name in here for first storyboard
          alt={story[currentStoryboard].alt}
          text={story[currentStoryboard].text}
          clickHome={clickHome}
          clickForward={clickForward}
        />
      ) : (
        <NameGame nameHandler={setNameHandler} />
      )}
    </>
  );
}
export default Game;
