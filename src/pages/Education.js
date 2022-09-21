import books from "../assets/icons/books-icon.svg";
import play from "../assets/icons/play-icon.svg";
import { useState, useEffect } from "react";
import EducationRead from "../components/EducationRead/EducationRead";
import EducationPlay from "../components/EducationPlay/EducationPlay";

function Education() {
  const [selected, setSelected] = useState(false);

  const toggleHandle = (category) => {
    setSelected(!selected);
    console.log("this is selected");
  };

  return (
    <section className="eduction">
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
          <img className="education__img" src={play} alt="play icon" />
        </button>
      </div>
      <EducationRead toggleClass={!selected ? "" : "selectedInfo"} />
      <EducationPlay toggleClass={selected ? "" : "selectedInfo"} />
    </section>
  );
}
export default Education;
