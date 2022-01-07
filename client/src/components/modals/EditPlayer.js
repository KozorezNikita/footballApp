import MyInput from "../UI/input/MyInput";
import React from "react";
import MyModal from "../UI/Modal/MyModal";
import MySelect from "../UI/select/MySelect";
import axios from "axios";

function EditPlayer({
  player,
  setPlayer,
  modalEditPlayer,
  setModalEditPlayer,
  allTeams,
}) {
  async function editPlayer(e, id) {
    e.preventDefault();
    await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/players/${id}`,
      player
    );
    /*setPlayer({ goals: create.goals, assists: create.assists, yellow_cards: create.yellow_cards, red_cards: create.red_cards, average_rating: create.average_rating, player_id: params.id  })*/
    setModalEditPlayer(false);
    /*setCreate({ goals: "", assists: "", yellow_cards: "", red_cards: "", average_rating: "", player_id: params.id  })*/
  }

  return (
    <div className="modal-stat">
      <MyModal visible={modalEditPlayer} setVisible={setModalEditPlayer}>
        <form className="form" onSubmit={(e) => editPlayer(e, player.id)}>
          <label>Name</label>
          <MyInput
            value={player.name}
            placeholder="name"
            onChange={(e) => setPlayer({ ...player, name: e.target.value })}
          />

          <label>Surname</label>
          <MyInput
            value={player.surname}
            placeholder="surname"
            onChange={(e) => setPlayer({ ...player, surname: e.target.value })}
          />
          <label>Image</label>
          <MyInput
            value={player.image}
            placeholder="image"
            onChange={(e) => setPlayer({ ...player, image: e.target.value })}
          />

          <label>Position</label>
          <MySelect
            value={player.position}
            onChange={(sort) => setPlayer({ ...player, position: sort })}
            defaultValue="select position"
            options={[
              { value: 1, name: "goalkeeper" },
              { value: 2, name: "defender" },
              { value: 3, name: "midfielder" },
              { value: 4, name: "forward" },
            ]}
          />

          <label>Team</label>
          <MySelect
            value={player.team_id}
            onChange={(sort) => setPlayer({ ...player, team_id: Number(sort) })}
            defaultValue="select team"
            options={allTeams.map((team) => ({
              value: team.id,
              name: team.team,
            }))}
          />

          <button disabled={Object.values(player).some((val) => val === "")}>
            Press to edit a statistic for player
          </button>
        </form>
      </MyModal>
    </div>
  );
}

export default EditPlayer;
