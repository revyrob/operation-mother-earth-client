import TitleHeader from "../components/TitleHeader/TitleHeader";
import recycling from "../assets/icons/recycling-icon.svg";

function Recycling() {
  return (
    <>
      <TitleHeader
        img={recycling}
        alt={"recycling icon"}
        text={"E-Waste Recycling Near You"}
      />
    </>
  );
}
export default Recycling;
