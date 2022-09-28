import "./Level.scss";
import earth from "../../assets/images/earth.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Level({ nextQuestion }) {
  let userName = sessionStorage.getItem("name");
  return (
    <div className="level">
      <Link to="/game/questions">
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 50,
          }}
        />
        <motion.img
          className="container level__img"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 50,
          }}
          src={earth}
          alt="earth"
        />
      </Link>
      <h1 className="level__text">Good luck {userName}</h1>
    </div>
  );
}
export default Level;
