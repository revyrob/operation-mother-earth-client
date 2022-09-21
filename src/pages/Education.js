import books from "../assets/icons/books-icon.svg";
import play from "../assets/icons/play-icon.svg";
import { useState, useEffect } from "react";

function Education() {
  const [selected, setSelected] = useState(false);

  const toggleHandle = () => {
    setSelected(true);
    console.log("this is selected");
  };

  return (
    <section className="eduction">
      <h1 className="education__title">Education</h1>
      <div className="education__img--div">
        <button
          onClick={() => toggleHandle()}
          className={selected ? "eduction__btn" : "selected"}
        >
          <img className="education__img" src={books} alt="books icon" />
        </button>
        <button
          onClick={() => toggleHandle()}
          className={selected ? "eduction__btn selected" : "eduction__btn"}
        >
          <img className="education__img" src={play} alt="play icon" />
        </button>
      </div>
    </section>
  );
}
export default Education;
