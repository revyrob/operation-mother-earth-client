import NavBar from "../components/NavBar/NavBar";

function AboutMe() {
  return (
    <section className="aboutMe">
      <h1 className="aboutMe__title">
        Hello <span className="wave">👋</span> I am Kayle
      </h1>
      <h2 className="aboutMe__info">I am a Web Developer</h2>

      <div className="aboutMe__div">
        <h3 className="aboutMe__div--title">Click on the links:</h3>
        <h4 className="aboutMe__git">
          Check-out my{" "}
          <a
            className="aboutMe__link"
            href="https://github.com/revyrob"
            target="blank"
          >
            Github
          </a>
        </h4>
        <h4 className="aboutMe__git">
          Mini biz:{" "}
          <a
            className="aboutMe__link"
            href="https://brianconfantomes.com"
            target="blank"
          >
            Briancon Fantomes
          </a>
        </h4>
        <h4 className="aboutMe__git">
          Passion project:{" "}
          <a
            className="aboutMe__link"
            href="https://bikebriancon.fr"
            target="blank"
          >
            Bike Briancon
          </a>
        </h4>
        <h4 className="aboutMe__git">
          Portfolio with other projects:{" "}
          <a
            className="aboutMe__link"
            href="https://kaylerobson.com"
            target="blank"
          >
            Kayle Robson
          </a>
        </h4>
      </div>
      <NavBar />
    </section>
  );
}
export default AboutMe;
