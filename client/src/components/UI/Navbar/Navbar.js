import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <p>Ligue 1</p>
      <div className="navlinks">
        <Link to="/FootballApp">Club</Link>
        <Link to="/StatisticHub">StatHub</Link>
      </div>
    </div>
  );
}

export default Navbar;
