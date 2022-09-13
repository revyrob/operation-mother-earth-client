import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/game" element={<Game />} />

        <Route path="/ewaste" element={<EWasteCentre />} />

        <Route path="/education" element={<Education />} />

        <Route path="/buySell" element={<BuySell />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
