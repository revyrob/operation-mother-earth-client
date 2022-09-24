import "./EducationPlay.scss";
import MainVid from "../MainVid/MainVid";
import VidList from "../VidList/VidList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EducationPlay({ toggleClass }) {
  const [vidList, setVidList] = useState(null);
  const [mainVid, setMainVid] = useState();

  //videoId as params
  const { videoId } = useParams();

  //get the videos
  const getVidList = () => {
    axios
      .get(`http://localhost:8080/education`)
      .then((response) => {
        console.log(response.data);
        setVidList(response.data);
      })
      .catch((err) => console.log(err));
  };

  //get main video
  const getMainVid = () => {
    if (videoId !== undefined) {
      axios
        .get(`http://localhost:8080/education/${videoId}`)
        .then((response) => {
          console.log(response.data);
          setMainVid(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `http://localhost:8080/education/b376b886-3b80-11ed-a261-0242ac120002`
        )
        .then((response) => {
          setMainVid(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  //use the list for the vids
  useEffect(() => {
    getVidList();
  }, []);

  //switch video in the video list
  useEffect(() => {
    getMainVid();
  }, [videoId]);

  return (
    <div className={toggleClass}>
      <section className="educationPlay">
        {mainVid && <MainVid item={mainVid} />}
        {mainVid && <VidList item={mainVid} vidList={vidList} />}
      </section>
    </div>
  );
}
export default EducationPlay;
