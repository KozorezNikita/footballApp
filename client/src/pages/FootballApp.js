import React, { useState, useEffect, useContext } from "react";
import { useFetching } from "../hooks/useFetching";

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
import Footer from "../components/UI/Footer/Footer";
import { Switch, Route } from "react-router-dom";

import Field from "./Field";
import FootballCardById from "./FootballCardById";
import Squad from "./Squad";

function FootballApp() {
  const [players, setPlayers] = useState([]);
  const [copyPlayers, setCopyPlayers] = useState([]);
  const [team, setTeam] = useState({});
  const [allTeams, setAllTeams] = useState([]);
  const { teamId, setTeamId } = useContext(FootballContext);

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
    setAllTeams(allTeams.data);
  });

  useEffect(() => {
    fetchPlayers(teamId);
    fetchTeams(teamId);
  }, [teamId]);

  return (
    <>
      <SearchBar
        team={team}
        players={players}
        teamId={teamId}
        setTeamId={setTeamId}
        allTeams={allTeams}
        setAllTeams={setAllTeams}
      />

      <Switch>
        <Route exact path="/footballApp/squad">
          <Squad
            players={players}
            setPlayers={setPlayers}
            allTeams={allTeams}
            setAllTeams={setAllTeams}
          />
        </Route>
        <Route exact path="/footballApp/teamStatHub">
          <TeamStatHub
            players={players}
            team={team}
            isPlayersLoading={isPlayersLoading}
          />
        </Route>
        <Route exact path="/footballApp/field">
          <Field teamId={teamId} />
        </Route>
        <Route exact path="/footballApp/:id">
          <FootballCardById />
        </Route>
      </Switch>
    </>
  );
}

export default FootballApp;
