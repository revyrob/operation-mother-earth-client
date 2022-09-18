import NameGame from "../components/NameGame/NameGame";
import { useState, useEffect } from "react";
import Questions from "../components/Questions/Questions";
import { render } from "@testing-library/react";
import axios from "axios";
import StoryboardPage from "./StoryboardPage";

function Game() {
  // const [name, setName] = useState(" ");

  //sets the name for user
  const setNameHandler = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    setName(userName);
    // render(<StoryboardPage />);
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

  // useEffect(() => {
  //   getQuestions();
  // }, []);

  const [name, setName] = useState("");
  console.log(name);

  return (
    <>
      <NameGame nameHandler={setNameHandler} />
    </>
  );
}
export default Game;
