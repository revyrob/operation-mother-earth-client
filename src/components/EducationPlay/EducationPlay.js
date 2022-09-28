import "./EducationPlay.scss";
import MainVid from "../MainVid/MainVid";
import VidList from "../VidList/VidList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EducationPlay({ toggleClass }) {
  const [vidList, setVidList] = useState(null);
  const [mainVid, setMainVid] = useState();

  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  //videoId as params
  const { videoId } = useParams();

  //get the videos
  const getVidList = () => {
    axios
      .get(`${REACT_APP_API_SERVER_URL}education`)
      .then((response) => {
        // console.log(response.data);
        setVidList(response.data);
      })
      .catch((err) => console.log(err));
  };

  //get main video
  const getMainVid = () => {
    if (videoId !== undefined) {
      axios
        .get(`${REACT_APP_API_SERVER_URL}education/${videoId}`)
        .then((response) => {
          // console.log(response.data);
          setMainVid(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`${REACT_APP_API_SERVER_URL}education/63333f17b89883dd92deb259`)
        .then((response) => {
          setMainVid(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  //use the list for the vids
  useEffect(() => {
    getVidList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //switch video in the video list
  useEffect(() => {
    getMainVid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
