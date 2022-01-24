import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FootballContext } from "../../../context/FootballContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  

  return (
    <div className="footer">
      <p>kozoreznikita@gmail.com</p>
      <p>&copy; Stat Hub 2021</p>
    </div>
  );
}

export default Footer;