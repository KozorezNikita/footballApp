import MyInput from "../UI/input/MyInput";
import React from "react";
import MyModal from "../UI/Modal/MyModal";


function EditStatistic({ player, setPlayer, create, modal3, setModal3, handleSubmitStat }) {
  

  

  return (
    <div className="modal-stat">
        <MyModal visible={modal3} setVisible={setModal3}>


        <form className="form" onSubmit={e => handleSubmitStat(e, player.player_id)} >



        <label>Goals</label>
          <MyInput
            value={player.goals}
            placeholder="goals"
            onChange={(e) => setPlayer({ ...player, goals: e.target.value })}
          />
          <br />
          <label>Assists</label>
          <MyInput
            value={player.assists}
            placeholder="assists"
            onChange={(e) => setPlayer({ ...player, assists: e.target.value })}
          />
          <br />
          <label>Yellow cards</label>
          <MyInput
            value={player.yellow_cards}
            placeholder="yellow_cards"
            onChange={(e) =>
              setPlayer({ ...player, yellow_cards: e.target.value })
            }
          />
          <label>Red cards</label>
          <MyInput
            value={player.red_cards}
            placeholder="red_cards"
            onChange={(e) =>
              setPlayer({ ...player, red_cards: e.target.value })
            }
          />
          <br />
          <label>Average rating</label>
          <MyInput
            value={player.average_rating}
            placeholder="average_rating"
            onChange={(e) =>
              setPlayer({ ...player, average_rating: e.target.value })
            }
          />
          <label>Player id</label>
          <MyInput value={create.player_id} placeholder="player_id" />
          <br />

          <button disabled={Object.values(player).some((val) => val === "")}>
            Press to create a statistic for player!
          </button>
        </form>
      </MyModal>
      </div>



  );
}

export default EditStatistic;