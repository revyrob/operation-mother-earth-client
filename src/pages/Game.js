import game from "../assets/icons/game-icon.svg";
import namePic from "../assets/images/mother-name.png";
import TitleHeader from "../components/TitleHeader/TitleHeader";
import InputName from "../components/InputName/InputName";

function Game() {
  return (
    <section className="game">
      <TitleHeader
        img={game}
        alt={"game icon"}
        text={"Welcome to the Operation Mother Earth Game"}
      />
      <img className="game__img" src={namePic} alt="mother earth" />
      <InputName />
    </section>
  );
}
export default Game;
