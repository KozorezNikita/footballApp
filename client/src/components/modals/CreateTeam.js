import MyInput from "../UI/input/MyInput";
import React, { useState } from "react";
import axios from "axios";
import MySelect from "../UI/select/MySelect";

function CreateTeam({ players, setPlayers, modal, setModal }) {
  const [create, setCreate] = useState({
    team: "",
    year: "",
    nickname: "",
    stadium: "",
    badge: "",
    description: "",
  });

  async function createTeam(e) {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/teams`, create);
    /*setPlayers(players.push({ name: create.name, surname: create.surname, image: create.image, position: create.position, team_id: create.team_id  }))*/
    setModal(false);
    /*setCreate({ name: "", surname: "", image: "", position: "", team_id: ""});*/
  }

  return (
    <form className="modal-player" onSubmit={createTeam}>
      <label>Team</label>
      <MyInput
        value={create.team}
        placeholder="team"
        onChange={(e) => setCreate({ ...create, team: e.target.value })}
      />

      <label>Year</label>
      <MyInput
        value={create.surname}
        placeholder="year"
        onChange={(e) => setCreate({ ...create, year: e.target.value })}
      />
      <label>Nickname</label>
      <MyInput
        value={create.image}
        placeholder="nickname"
        onChange={(e) => setCreate({ ...create, nickname: e.target.value })}
      />

      <label>Stadium</label>
      <MyInput
        value={create.stadium}
        placeholder="stadium"
        onChange={(e) => setCreate({ ...create, stadium: e.target.value })}
      />
      <label>Badge</label>
      <MyInput
        value={create.badge}
        placeholder="badge"
        onChange={(e) => setCreate({ ...create, badge: e.target.value })}
      />
      <label>Description</label>
      <MyInput
        value={create.description}
        placeholder="description"
        onChange={(e) => setCreate({ ...create, description: e.target.value })}
      />

      <button disabled={Object.values(create).some((val) => val === "")}>
        Press to create a team!
      </button>
    </form>
  );
}

export default CreateTeam;
