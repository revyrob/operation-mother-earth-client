import vid from "../../assets/images/robot.png";

function Vids() {
  return (
    <div className="vids">
      <img src={vid} alt={"robo"} />
      <div className="vids__info">
        <h3 className="vids__title">Title</h3>
        <p className="vids__category">category</p>
      </div>
    </div>
  );
}
export default Vids;
