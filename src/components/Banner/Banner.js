import ButtonBig from "../ButtonBig/ButtonBig";
import gameIcon from "../../assets/icons/game-icon.svg";
import recycleIcon from "../../assets/icons/recycling-icon.svg";
import education from "../../assets/icons/books-icon.svg";
import "./Banner.scss";

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
