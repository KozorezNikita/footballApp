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
import Footer from "../components/UI/Footer/Footer";

function Squad({
  players,
  setPlayers,
  isPlayersLoading,
  playerError,
  allTeams,
  setAllTeams,
}) {
  const [modal, setModal] = useState(false);

  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="footballApp">
      <MyModal visible={modal} setVisible={setModal}>
        <div className="modal-toggle">
          <p
            className={toggleModal ? "active" : null}
            onClick={() => setToggleModal(true)}
          >
            Team
          </p>
          <hr />
          <p
            className={toggleModal ? null : "active"}
            onClick={() => setToggleModal(false)}
          >
            Player
          </p>
        </div>
        {toggleModal ? (
          <CreateTeam
            players={players}
            setPlayers={setPlayers}
            modal={modal}
            setModal={setModal}
          />
        ) : (
          <CreatePlayer
            players={players}
            setPlayers={setPlayers}
            modal={modal}
            setModal={setModal}
            allTeams={allTeams}
            setAllTeams={setAllTeams}
          />
        )}
      </MyModal>

      <button className="btn-add" onClick={() => setModal(true)}>
        Add player to database
      </button>

      {isPlayersLoading ? (
        <MyLoader />
      ) : (
        <>
          <div className="empty">
            {playerError && <h1>Error happened ${playerError}</h1>}
          </div>
          <PlayersList players={players} /> <Footer />
        </>
      )}
    </div>
  );
}

export default Squad;
