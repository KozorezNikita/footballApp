import MyInput from "../UI/input/MyInput";
import React, { useState } from "react";
import axios from "axios";
import MySelect from "../UI/select/MySelect";

function CreatePlayer({
  players,
  setPlayers,
  modal,
  setModal,
  allTeams,
  setAllTeams,
}) {
  const [create, setCreate] = useState({
    name: "",
    surname: "",
    image: "",
    position: "",
    team_id: "",
  });

  async function createPlayer(e) {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/players`, create);
    /*setPlayers(players.push({ name: create.name, surname: create.surname, image: create.image, position: create.position, team_id: create.team_id  }))*/
    setModal(false);
    /*setCreate({ name: "", surname: "", image: "", position: "", team_id: ""});*/
  }

  return (
    <form className="modal-player" onSubmit={createPlayer}>
      <label>Name</label>
      <MyInput
        value={create.name}
        placeholder="name"
        onChange={(e) => setCreate({ ...create, name: e.target.value })}
      />

      <label>Surname</label>
      <MyInput
        value={create.surname}
        placeholder="surname"
        onChange={(e) => setCreate({ ...create, surname: e.target.value })}
      />
      <label>Image</label>
      <MyInput
        value={create.image}
        placeholder="image"
        onChange={(e) => setCreate({ ...create, image: e.target.value })}
      />

      <label>Position</label>
      <MySelect
        value={create.position}
        onChange={(sort) => setCreate({ ...create, position: sort })}
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
        value={create.team_id}
        onChange={(sort) => setCreate({ ...create, team_id: Number(sort) })}
        defaultValue="select team"
        options={allTeams.map((team) => ({
          value: team.id,
          name: team.team,
        }))}
      />

      <button disabled={Object.values(create).some((val) => val === "")}>
        Press to create a player!
      </button>
    </form>
  );
}

export default CreatePlayer;
