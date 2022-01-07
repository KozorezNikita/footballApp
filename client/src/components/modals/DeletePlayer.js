import React from "react";
import MyModal from "../UI/Modal/MyModal";
import axios from "axios";

function DeletePlayer({ player, modalDelete, setModalDelete }) {
  async function deletePlayer(id) {
    await axios
      .delete(`${process.env.REACT_APP_BASE_URL}/api/players/${id}`)
      .then((response) => {
        if (response.data !== null) {
          alert("player deleted from a database");
        }
      });
  }

  return (
    <div className="modal-delete">
      <MyModal visible={modalDelete} setVisible={setModalDelete}>
        <p>delete a player from database? </p>
        <button
          onClick={() => {
            deletePlayer(player.id);
            setModalDelete(false);
          }}
        >
          delete player
        </button>{" "}
        <button onClick={() => setModalDelete(false)}>Cancel</button>
      </MyModal>
    </div>
  );
}

export default DeletePlayer;
