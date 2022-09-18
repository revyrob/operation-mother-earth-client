import NameGame from "../components/NameGame/NameGame";
import { useState, useEffect } from "react";
import Questions from "../components/Questions/Questions";
import { render } from "@testing-library/react";
import axios from "axios";

function Game({ nameHandler }) {
  // const [name, setName] = useState(" ");

  // //sets the name for user
  // const setNameHandler = (e) => {
  //   e.preventDefault();
  //   const userName = e.target.name.value;
  //   setName(userName);
  //   render(<Questions />);
  // };

  //get questions and answer for game
  const getQuestions = () => {
    axios
      .get(`http://localhost:8080/game`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <NameGame />
    </>
  );
}
export default Game;
