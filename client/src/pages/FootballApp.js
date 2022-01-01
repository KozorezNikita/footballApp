import React, { useState, useEffect, useContext } from "react";
import { useFetching } from "../hooks/useFetching";
import { usePlayers } from "../hooks/usePlayers";
import PlayersService from "../API/PlayersService";
import TeamsService from "../API/TeamsService";
import PlayersList from "../components/PlayersList";
import SearchBar from "../components/SearchBar";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import TeamStatHub from "./TeamStatHub";
import MyModal from "../components/UI/Modal/MyModal";
import CreatePlayer from "../components/modals/CreatePlayer";
import { FootballContext } from "../context/FootballContext";
import CreateTeam from "../components/modals/CreateTeam";




function FootballApp() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const {toggle, setToggle} = useContext(FootballContext);
  const {teamId, setTeamId} = useContext(FootballContext);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState({text: "" });
  const [toggleModal, setToggleModal] = useState(false);

  const [fetchPlayers, isPlayersLoading, playerError] = useFetching(
    async () => {
      const players = await PlayersService.getAll(teamId);
      setPlayers(players.data);
    }
  );

  const [fetchTeams, isTeamsLoading, teamError] = useFetching(async (id) => {
    const team = await TeamsService.getTeamById(id);
    setTeam(team.data);
    const allTeams = await TeamsService.getTeams();
    setAllTeams(allTeams.data)
  });

  const sortedAndSearchedPlayers = usePlayers(
    players,
    teamId,
    selected.text
  );

  useEffect(() => {
    fetchPlayers(teamId);
    fetchTeams(teamId);
  }, [teamId]);

  return (
    <div className="footballApp">
      
      <MyModal visible={modal} setVisible={setModal}>
        <div className="modal-toggle"><p className={toggleModal ? "active" : null} onClick={() => setToggleModal(true)}>Team</p><hr /><p className={toggleModal ? null : "active" }   onClick={() => setToggleModal(false)}>Player</p></div>
        { toggleModal ?
         <CreateTeam
         players={players}
         setPlayers={setPlayers}
         modal={modal}
         setModal={setModal}
       /> :
        <CreatePlayer
          players={players}
          setPlayers={setPlayers}
          modal={modal}
          setModal={setModal}
          allTeams={allTeams}
          setAllTeams={setAllTeams}
        />
        
          }
      </MyModal>
      

      <SearchBar
        players={players}
        selected={selected}
        setSelected={setSelected}
        teamId={teamId}
        setTeamId={setTeamId}
        toggle={toggle}
        setToggle={setToggle}
        allTeams={allTeams}
        setAllTeams={setAllTeams}
      />
      {toggle ? (
        
        
        <button className="btn-add" onClick={() => setModal(true)}>
          Add player to database
        </button>
        
      ) : null}
      {isPlayersLoading ? (
        <MyLoader />
      ) : toggle ? (
        <>
          <div className="empty">
            {playerError && <h1>Error happened ${playerError}</h1>}
          </div>
          <PlayersList players={sortedAndSearchedPlayers} />{" "}
        </>
      ) : (
        <TeamStatHub players={sortedAndSearchedPlayers} team={team} />
      )}
    </div>
  );
}

export default FootballApp;


/*

import React, { useState, useEffect, useContext } from "react";
import { useFetching } from "../hooks/useFetching";
import { usePlayers } from "../hooks/usePlayers";
import PlayersService from "../API/PlayersService";
import TeamsService from "../API/TeamsService";
import PlayersList from "../components/PlayersList";
import SearchBar from "../components/SearchBar";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import TeamStatHub from "./TeamStatHub";
import MyModal from "../components/UI/Modal/MyModal";
import CreatePlayer from "../components/modals/CreatePlayer";
import { FootballContext } from "../context/FootballContext";

function FootballApp() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const {toggle, setToggle} = useContext(FootballContext);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState({ team: 1, text: "" });
  const [fetchPlayers, isPlayersLoading, playerError] = useFetching(
    async () => {
      const players = await PlayersService.getAll(selected.team);
      setPlayers(players.data);
    }
  );

  const [fetchTeams, isTeamsLoading, teamError] = useFetching(async (id) => {
    const teams = await TeamsService.getTeamById(id);
    setTeams(teams.data);
  });

  const sortedAndSearchedPlayers = usePlayers(
    players,
    selected.team,
    selected.text
  );

  useEffect(() => {
    fetchPlayers(selected.team);
    fetchTeams(selected.team);
  }, [selected]);

  return (
    <div className="footballApp">
      <MyModal visible={modal} setVisible={setModal}>
        <CreatePlayer
          players={players}
          setPlayers={setPlayers}
          modal={modal}
          setModal={setModal}
        />
      </MyModal>

      <SearchBar
        players={players}
        selected={selected}
        setSelected={setSelected}
        toggle={toggle}
        setToggle={setToggle}
      />
      {toggle ? (
        <button className="btn-add" onClick={() => setModal(true)}>
          Add player to database
        </button>
      ) : null}
      {isPlayersLoading ? (
        <MyLoader />
      ) : toggle ? (
        <>
          <div className="empty">
            {playerError && <h1>Произошла ошибка ${playerError}</h1>}
          </div>
          <PlayersList players={sortedAndSearchedPlayers} />{" "}
        </>
      ) : (
        <TeamStatHub players={sortedAndSearchedPlayers} teams={teams} />
      )}
    </div>
  );
}

export default FootballApp;

*/