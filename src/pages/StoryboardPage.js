import Storyboard from "../components/Storyboard/Storyboard";
import earthdying from "../assets/images/mother-nature-dies.png";
import backBtn from "../assets/icons/earth-back-icon.png";
import forwardBtn from "../assets/icons/earth-forward-icon.png";
import { useState, Link } from "react";

function StoryboardPage() {
  const story = {
    //axios call to back end with story and objects to iterate over
  };

  //create on click forward goes to the next page
  //it also goes to the next storyboard info
  const clickForward = () => {
    const nextStoryboard = currentStoryboard + 1;
    if (nextStoryboard < story.length) {
      setCurrentStoryboard(nextStoryboard);
    } else {
      <Link to="/game"></Link>;
    }
  };
  //create onclick back goes to the previous page
  //goes back in storyboard info
  const clickBack = () => {
    const previousStoryboard = currentStoryboard - 1;
    if (previousStoryboard > story.length) {
      setCurrentStoryboard(previousStoryboard);
    } else {
      <Link to="/"></Link>;
    }
  };

  const [currentStoryboard, setCurrentStoryboard] = useState("");
  return (
    <>
      <Storyboard
        img={earthdying}
        alt={"motherearth dying"}
        text={"text will come from json"}
      />
      <div className="direction">
        <button onClick={() => clickBack()} className="direction__back">
          <img src={backBtn} alt={"back button"} />
        </button>

        <button onClick={() => clickForward()} className="direction__forward">
          <img src={forwardBtn} alt={"forward button"} />
        </button>
      </div>
    </>
  );
}
export default StoryboardPage;
