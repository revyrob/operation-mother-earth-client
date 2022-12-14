import books from "../assets/icons/books-icon.svg";
import play from "../assets/icons/play-icon.svg";
import { useState } from "react";
import EducationRead from "../components/EducationRead/EducationRead";
import EducationPlay from "../components/EducationPlay/EducationPlay";
import NavBar from "../components/NavBar/NavBar";
import HeaderChange from "../components/HeaderChange/HeaderChange";

function Education() {
  const [selected, setSelected] = useState(false);

  const toggleHandle = (category) => {
    setSelected(!selected);
  };

  return (
    <>
      <HeaderChange />
      <section className="education">
        <h1 className="education__title">Education</h1>
        <div className="education__img--div">
          <button
            onClick={() => toggleHandle("books")}
            className={`education__btn ${!selected ? "selected" : ""}`}
          >
            <img className="education__img" src={books} alt="books icon" />
          </button>
          <button
            onClick={() => toggleHandle("films")}
            className={`education__btn ${selected ? "selected" : ""}`}
          >
            <img className="education__img--play" src={play} alt="play icon" />
          </button>
        </div>
        <EducationRead toggleClass={!selected ? "" : "selectedInfo"} />
        <EducationPlay toggleClass={selected ? "" : "selectedInfo"} />
        <NavBar />
      </section>
    </>
  );
}
export default Education;
