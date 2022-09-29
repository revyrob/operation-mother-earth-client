import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import Levels from "./pages/Levels";
import Questions from "./pages/Questions";
import Recycling from "./pages/Recycling";
import FormAdd from "./pages/FormAdd";
import Education from "./pages/Education";
import AboutMe from "./pages/AboutMe";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutMe />} />

        <Route path="/game" element={<Game />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
