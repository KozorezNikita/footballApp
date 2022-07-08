/*
import { useState, useEffect } from "react";
import MySelect from "./UI/select/MySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useFetching } from "../hooks/useFetching";
import TeamsService from "../API/TeamsService";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

function SearchBar({
  players,
  selected,
  setSelected,
  toggle,
  setToggle,
  teamId,
  setTeamId,
  allTeams,
  setAllTeams,
}) {
  return (
    <div className="searchbar">
      <MySelect
        value={teamId}
        onChange={(sort) => setTeamId(Number(sort))}
        defaultValue="sort by"
        options={allTeams.map((team) => ({
          value: team.id,
          name: team.team,
        }))}
      />
      <div className="routes">
        <span onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
        </span>
        <span onClick={() => setToggle(false)}>
          <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
        </span>
        <Link to="/field">Field</Link>
      </div>
      <div ><CountUp end={players.length} duration={1.5} /></div>
    </div>
  );
}

export default SearchBar;
*/

import { useState, useEffect } from "react";
import MySelect from "./UI/select/MySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFutbol,
  faTable,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useFetching } from "../hooks/useFetching";
import TeamsService from "../API/TeamsService";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

function SearchBar({
  players,
  selected,
  setSelected,
  teamId,
  setTeamId,
  allTeams,
  setAllTeams,
  team,
}) {
  return (
    <div className="searchbar">
      <MySelect
        image={team.badge}
        value={teamId}
        onChange={(sort) => setTeamId(Number(sort))}
        defaultValue="sort by"
        options={allTeams.map((team) => ({
          value: team.id,
          name: team.team,
        }))}
      />
      <div className="routes">
        <Link to="/footballApp/squad">
          <span>
            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
          </span>
        </Link>
        <Link to="/footballApp/teamStatHub">
          <span>
            <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
          </span>
        </Link>
        <Link to="/footballApp/field">
          <span>
            <FontAwesomeIcon icon={faTable}></FontAwesomeIcon>
          </span>
        </Link>
      </div>
      <div>
        <CountUp end={players.length} duration={1.5} />
      </div>
    </div>
  );
}

export default SearchBar;
