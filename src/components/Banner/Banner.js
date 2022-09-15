import ButtonBig from "../ButtonBig/ButtonBig";
import gameIcon from "../../assets/icons/game-icon.svg";
import recycleIcon from "../../assets/icons/recycling-icon.svg";
import buySellIcon from "../../assets/icons/image 20.svg";
import education from "../../assets/icons/books-icon.svg";

import "./Banner.scss";
import Game from "../../pages/Game";
import Recycling from "../../pages/Recycling";
import BuySell from "../../pages/BuySell";
import Education from "../../pages/Education";

import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner">
      <Link to={"/game"}>
        <ButtonBig img={gameIcon} alt={"game icon"} text={"Game"} />
      </Link>

      <Link to={"/recycling"}>
        <ButtonBig
          img={recycleIcon}
          alt={"recycle icon"}
          text={"Recycling Near You"}
        />
      </Link>

      <Link to={"/buySell"}>
        <ButtonBig
          img={buySellIcon}
          alt={"buy and sell icon"}
          text={"Buy & Sell"}
        />
      </Link>

      <Link to={"/education"}>
        <ButtonBig
          img={education}
          alt={"books icon"}
          text={"Educate Yourself"}
        />
      </Link>
    </section>
  );
}
export default Banner;
