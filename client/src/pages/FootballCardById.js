import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import PlayersService from "../API/PlayersService";
import PlayerCard from "../components/PlayerCard";
import CreateStatistic from "../components/modals/CreateStatistic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import DeletePlayer from "../components/modals/DeletePlayer";
import EditStatistic from "../components/modals/EditStatistic";
import EditPlayer from "../components/modals/EditPlayer";
import { FootballContext } from "../context/FootballContext";
import { useHistory } from "react-router-dom";
import TeamsService from "../API/TeamsService";

function FootballCardById() {
  const params = useParams();
  const router = useHistory();
  const [allTeams, setAllTeams] = useState([]);
  const { teamId, setTeamId } = useContext(FootballContext);
  const [player, setPlayer] = useState({});
  const [modalCreateStat, setModalCreateStat] = useState(false);
  const [modalEditPlayer, setModalEditPlayer] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEditStat, setModalEditStat] = useState(false);
  const [create, setCreate] = useState({
    goals: "",
    assists: "",
    yellow_cards: "",
    red_cards: "",
    average_rating: "",
    player_id: params.id,
  });

  const [fetchPlayersById, isLoading] = useFetching(async (id) => {
    const response = await PlayersService.getById(id);
    setPlayer(response.data);
  });

  const [fetchTeams, isTeamsLoading, teamError] = useFetching(async () => {
    const allTeams = await TeamsService.getTeams();
    setAllTeams(allTeams.data);
  });

  async function changePlayer(e) {
    e.preventDefault();

    var response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/players/statistic/${params.id}/next?team_id=${teamId}`
    );
    router.push(`/footballApp/${response.data.id}`);
  }

  useEffect(() => {
    fetchPlayersById(params.id);
    fetchTeams();
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : player !== "" ? (
        <div className="modal-select">
          <div className="card-id">
            <div className="info">
              <img
                src={player.image}
                alt={player.surname}
                onClick={() => router.push(`/footballApp/${player.id}`)}
              />
              <p>{player.name}</p>
              <p className="surname">{player.surname}</p>
            </div>

            <div className="stats">
              <span onClick={() => setModalDelete(true)}>
                <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
              </span>
              <p>{player.average_rating}</p>
              <p>Goals: {player.goals}</p>
              <p>Assists: {player.assists}</p>
              <p>Yellow cards: {player.yellow_cards}</p>
              <p>Red cards: {player.red_cards}</p>

              <button onClick={() => setModalEditPlayer(true)}>
                edit player
              </button>
              <button onClick={() => setModalEditStat(true)}>edit stats</button>
              <button onClick={changePlayer}>Next player</button>
            </div>
          </div>

          <EditStatistic
            player={player}
            setPlayer={setPlayer}
            create={create}
            modalEditStat={modalEditStat}
            setModalEditStat={setModalEditStat}
          />
          <EditPlayer
            player={player}
            setPlayer={setPlayer}
            modalEditPlayer={modalEditPlayer}
            setModalEditPlayer={setModalEditPlayer}
            allTeams={allTeams}
          />
          <DeletePlayer
            player={player}
            modalDelete={modalDelete}
            setModalDelete={setModalDelete}
          />
        </div>
      ) : (
        <CreateStatistic
          create={create}
          setCreate={setCreate}
          modalCreateStat={modalCreateStat}
          setModalCreateStat={setModalCreateStat}
        />
      )}
    </>
  );
}

export default FootballCardById;

/*
<PlayerCard player={player} />
*/
