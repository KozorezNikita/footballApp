import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import PlayersService from "../API/PlayersService";
import PlayerCard from "../components/PlayerCard";
import ModalStatistic from "../components/modals/ModalStatistic";

function FootballCardById() {
  const params = useParams();
  const [player, setPlayer] = useState({});
  const [modal, setModal] = useState(false);
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

  useEffect(() => {
    fetchPlayersById(params.id);
  }, []);

  return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : player !== "" ? (
        <div className="card-id">
          <PlayerCard player={player} />

          <div className="stats">
            <p>{player.average_rating}</p>
            <p>Goals: {player.goals}</p>
            <p>Assists: {player.assists}</p>
            <p>Yellow cards: {player.yellow_cards}</p>
            <p>Red cards: {player.red_cards}</p>
          </div>
        </div>
      ) : (
        <ModalStatistic
          create={create}
          setCreate={setCreate}
          modal={modal}
          setModal={setModal}
        />
      )}
    </>
  );
}

export default FootballCardById;
