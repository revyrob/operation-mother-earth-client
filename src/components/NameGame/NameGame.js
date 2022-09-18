import "./NameGame.scss";
import game from "../../assets/icons/game-icon.svg";
import namePic from "../../assets/images/mother-name.png";
import TitleHeader from "../TitleHeader/TitleHeader";
import forward from "../../assets/icons/earth-forward-icon.png";
import { Link } from "react-router-dom";

function NameGame({ nameHandler }) {
  return (
    <section className="namegame">
      <TitleHeader
        img={game}
        alt={"game icon"}
        text={"Welcome to the Operation Mother Earth Game"}
      />
      <img className="namegame__img" src={namePic} alt="mother earth" />
      <form
        method="post"
        // className="formField__wrapper--mobile"
        onSubmit={nameHandler}
      >
        <label>
          <h2 className="namegame__label">Enter your name:</h2>
          <div className="namegame__div">
            <input
              className="namegame__input"
              type="text"
              name="name"
              placeholder="Name here..."
            />
          </div>
        </label>
        <Link to="/game/storyboard">
          <button className="namegame__btn" type="submit">
            <img
              className="namegame__btn--img"
              src={forward}
              alt="earth submit button"
            />
          </button>
        </Link>
      </form>
    </section>
  );
}

export default NameGame;
