import MyInput from "../UI/input/MyInput";
import React from "react";
import MyModal from "../UI/Modal/MyModal";
import MySelect from "../UI/select/MySelect";


function EditPlayer({ player, setPlayer, modal1, setModal1, handleSubmit }) {
  

  

  return (
    <div className="modal-stat">
        <MyModal visible={modal1} setVisible={setModal1}>


        <form className="form" onSubmit={e => handleSubmit(e, player.id)} >



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
          { value: "goalkeeper", name: "goalkeeper" },
          { value: "defender", name: "defender" },
          { value: "midfielder", name: "midfielder" },
          { value: "forward", name: "forward" },
        ]}
      />

      <label>Team</label>
      <MySelect
        value={player.team_id}
        onChange={(sort) => setPlayer({ ...player, team_id: Number(sort) })}
        defaultValue="select team"
        options={[
          { value: 1, name: "Olympique Lyonnais" },
          { value: 3, name: "Lille" },
        ]}
      />

        
          <button disabled={Object.values(player).some((val) => val === "")}>
            Press to create a statistic for player!
          </button>
        </form>
      </MyModal>
      </div>
  );
}

export default EditPlayer;
