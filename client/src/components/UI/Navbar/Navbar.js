import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FootballContext } from "../../../context/FootballContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { auth, setAuth, toggle, setToggle, token, setToken } =
    useContext(FootballContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    history.push("/login");
  };

  return token ? (
    <div className="navbar">
      <p>Ligue 1</p>
      <div className="navlinks">
        <Link
          to="/footballApp/squad"
          onClick={() => {
            if (toggle === false) {
              setToggle(true);
            }
          }}
        >
          Club
        </Link>

        <Link to="/tableHub">StatHub</Link>

        <span>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            onClick={handleLogout}
          ></FontAwesomeIcon>
        </span>
      </div>
    </div>
  ) : (
    <div className="navbar">
      <p>Ligue 1</p>
      <p onClick={() => history.push("/login")}>Sign up</p>
    </div>
  );
}

export default Navbar;
