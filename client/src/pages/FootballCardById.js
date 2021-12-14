import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import PlayersService from "../API/PlayersService";
import PlayerCard from "../components/PlayerCard";
import axios from "axios";
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

/*

return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : (

         player !== "" ? 
        <div className="card-id">
          <PlayerCard player={player} />
          
          <div className="stats">
          <p>{player.average_rating}</p>
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>
          <p>Yellow cards: {player.yellow_cards}</p>
          <p>Red cards: {player.red_cards}</p>
          </div> 
        


    



        </div> : <>
        <MyModal visible={modal} setVisible={setModal}>
            <form onSubmit={handleSubmit}>

            <label>goals</label>
            <MyInput
            value={create.goals}
            placeholder="goals"
            onChange={(e) => setCreate({ ...create, goals: e.target.value })}
            />
            <br />
            <label>assists</label>
            <MyInput
            value={create.assists}
            placeholder="assists"
            onChange={(e) => setCreate({ ...create, assists: e.target.value })}
            />
            <br />
            <label>yellow_cards</label>
            <MyInput
            value={create.yellow_cards}
            placeholder="yellow_cards"
            onChange={(e) => setCreate({ ...create, yellow_cards: e.target.value })}
            />
            <label>red_cards</label>
            <MyInput
            value={create.red_cards}
            placeholder="red_cards"
            onChange={(e) => setCreate({ ...create, red_cards: e.target.value })}
            />
            <br />
            <label>average_rating</label>
            <MyInput
            value={create.average_rating}
            placeholder="average_rating"
            onChange={(e) => setCreate({ ...create, average_rating: e.target.value })}
            />
            <label>player_id</label>
            <MyInput
            value={params.id}
            placeholder="player_id"
            
            />
            <br />
            <br />
            <br />
            <button>Press to create a statistic for player!</button>

            </form>
        </MyModal>
        <button onClick={() => setModal(true)}>Click me!</button></>
      )}
    </>
  );
}

*/
