import React from "react";
import { Link } from "react-router-dom";
import envelope from "../../assets/icons/envelope-icon.png";
import "./ButtonMailto.scss";

const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <img className="footer__icon" src={envelope} alt={"envelope icon"} />
    </Link>
  );
};

export default ButtonMailto;
