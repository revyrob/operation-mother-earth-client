import "./HeaderChange.scss";
import logoIcon from "../../assets/logo/logo-earth.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeaderChange() {
  return (
    <section className="headerChange">
      <Link to={"/"}>
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 5 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 50,
          }}
        />
        <motion.img
          className="container headerChange"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 50,
          }}
          src={logoIcon}
          alt="operation mother earth logo earth icon"
        />
      </Link>
    </section>
  );
}

export default HeaderChange;
