import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FootballContext } from "../../../context/FootballContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const {auth, setAuth, toggle, setToggle} = useContext(FootballContext);

  const handleLogout = e => {
    setAuth(false);
    localStorage.removeItem("auth")
  }

  return (
    <div className="navbar">
      <p>Ligue 1</p>
      <div className="navlinks">
    { auth ? 
      <>
        <Link to="/FootballApp" onClick={() => {if (toggle === false) {setToggle(true)} }}>Club</Link>
        <Link to="/StatisticHub">StatHub</Link>
        <span><FontAwesomeIcon icon={faSignOutAlt} onClick={handleLogout}></FontAwesomeIcon></span>
        </> : 
        <>
        <Link to="/FootballApp">Club</Link>
        <Link to="/StatisticHub">StatHub</Link>
        
        </>
    }
      </div>
    </div>
  );
}

export default Navbar;
