import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import Recycling from "./pages/Recycling";
import BuySell from "./pages/BuySell";
import Education from "./pages/Education";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/game" element={<Game />} />

        <Route path="/recycling" element={<Recycling />} />

        <Route path="/education" element={<Education />} />

        <Route path="/buySell" element={<BuySell />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
