import "./Banner.scss";
import ButtonBig from "../ButtonBig/ButtonBig";
import gameIcon from "../../assets/icons/game-icon.svg";
import recycleIcon from "../../assets/icons/recycling-icon.svg";
import education from "../../assets/icons/books-icon.svg";
import { Link } from "react-router-dom";
import BigGameBtn from "../BigGameBtn/BigGameBtn";
import motherEarth from "../../assets/images/mother-nature.png";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__divWrapper">
        <div className="banner__div--game">
          <Link to={"/game"}>
            <BigGameBtn
              img={gameIcon}
              alt={"game icon"}
              text={"Game"}
              imgLrg={motherEarth}
              altLrg={"mother earth holding earth"}
            />
          </Link>
        </div>

        <div className="banner__div--extra">
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
        </div>
      </div>
    </section>
  );
}
export default Banner;
