import React, { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import { usePlayers } from "../hooks/usePlayers";
import PlayersService from "../API/PlayersService";
import TeamsService from "../API/TeamsService";
import PlayersList from "../components/PlayersList";
import SearchBar from "../components/SearchBar";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import TeamStatHub from "../components/TeamStatHub";
import MyModal from "../components/UI/Modal/MyModal";

import ModalPlayer from "../components/modals/ModalPlayer";

function FootballApp() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [toggle, setToggle] = useState(true);
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
    <div>
      <MyModal visible={modal} setVisible={setModal}>
        <ModalPlayer
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
        <PlayersList players={sortedAndSearchedPlayers} />
      ) : (
        <TeamStatHub players={sortedAndSearchedPlayers} teams={teams} />
      )}
    </div>
  );
}

export default FootballApp;
