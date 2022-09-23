import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import Levels from "./pages/Levels";
import Questions from "./pages/Questions";
import Recycling from "./pages/Recycling";
import BuySell from "./pages/BuySell";
import Education from "./pages/Education";
import Footer from "./components/Footer/Footer";
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
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/game" element={<Game nameHandler={setNameHandler} />} />
        <Route path="/game/level" element={<Levels />} />
        <Route path="/game/questions" element={<Questions />} />

        <Route path="/recycling" element={<Recycling />} />

        <Route path="/education" element={<Education />} />

        <Route path="/buySell" element={<BuySell />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
