import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import Storyboard1 from "./pages/gamePages/Storyboard1";
import Recycling from "./pages/Recycling";
import RecyclingForm from "./pages/RecyclingForm";
import BuySell from "./pages/BuySell";
import Education from "./pages/Education";
import Footer from "./components/Footer/Footer";

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
        <Route path="/game/storyboard1" element={<Storyboard1 />} />

        <Route path="/recycling" element={<Recycling />} />
        <Route path="/recycling/new" element={<RecyclingForm />} />

        <Route path="/education" element={<Education />} />

        <Route path="/buySell" element={<BuySell />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
