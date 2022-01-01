import {useState, useEffect} from "react";
import MySelect from "./UI/select/MySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useFetching } from "../hooks/useFetching";
import TeamsService from "../API/TeamsService";

function SearchBar({ players, selected, setSelected, toggle, setToggle, teamId, setTeamId, allTeams, setAllTeams }) {
  /*
  
  const [teams, setTeams] = useState([]);


  
  const [fetchTeams, isTeamsLoading, teamError] = useFetching(async () => {
    const teams = await TeamsService.getTeams();
    setTeams(teams.data);
  });

  useEffect(() => {
    fetchTeams();
  }, [] );

*/


  return (
    <div className="searchbar">
      <MySelect
        value={teamId}
        onChange={(sort) => setTeamId(Number(sort))}
        defaultValue="sort by"
        options={allTeams.map(team => ({
          value: team.id,
          name: team.team
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



/*


<MySelect
        value={teamId}
        onChange={(sort) => setTeamId(Number(sort))}
        defaultValue="sort by"
        options={[
          { value: 1, name: "Olympique Lyonnais" },
          { value: 3, name: "Lille" },
        ]}
      />













import React from "react";
import MySelect from "./UI/select/MySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ players, selected, setSelected, toggle, setToggle }) {
  return (
    <div className="searchbar">
      <MySelect
        value={selected.team}
        onChange={(sort) => setSelected({ ...selected, team: Number(sort) })}
        defaultValue="sort by"
        options={[
          { value: 1, name: "Olympique Lyonnais" },
          { value: 3, name: "Lille" },
        ]}
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



*/