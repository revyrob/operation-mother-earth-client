import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import Levels from "./pages/Levels";
import Questions from "./pages/Questions";
import Recycling from "./pages/Recycling";
import FormAdd from "./pages/FormAdd";
import BuySell from "./pages/BuySell";
import Education from "./pages/Education";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [name, setName] = useState(" ");

  //sets the name for user
  const setNameHandler = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    console.log(userName);
    setName(userName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/game" element={<Game nameHandler={setNameHandler} />} />
        <Route path="/game/level" element={<Levels />} />
        <Route path="/game/questions" element={<Questions />} />

        <Route path="/recycling" element={<Recycling />} />
        <Route path="/recycling/add" element={<FormAdd />} />

        <Route path="/education" element={<Education />} />
        <Route path="/education/:videoId" element={<Education />} />
        <Route path="/education/questions" element={<Education />} />
        <Route
          path="/education/questions/:questionId"
          element={<Education />}
        />
        <Route path="/education/questions/new" element={<Education />} />

        <Route path="/buySell" element={<BuySell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
