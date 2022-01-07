import { useState, useEffect } from "react";
import MySelect from "./UI/select/MySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useFetching } from "../hooks/useFetching";
import TeamsService from "../API/TeamsService";

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
      <div>
        <span onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
        </span>
        <span onClick={() => setToggle(false)}>
          <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
        </span>
      </div>
      <p> {players.length} </p>
    </div>
  );
}

export default SearchBar;
