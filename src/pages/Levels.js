import Level from "../components/Level/Level";
import NavBar from "../components/NavBar/NavBar";

function Levels({ nextQueston }) {
  return (
    <>
      <Level level={nextQueston} />
      <NavBar />
    </>
  );
}
export default Levels;
