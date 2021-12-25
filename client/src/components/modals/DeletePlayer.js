import React from "react";
import MyModal from "../UI/Modal/MyModal";

function DeletePlayer({ player, modal2, setModal2, handleClick }) {
  

  

    return (
        <div className="modal-delete">
        <MyModal visible={modal2} setVisible={setModal2}> 
        <p>delete a player from database? </p>
        <button onClick={() => {  handleClick(player.id) ;setModal2(false)}}>delete player</button> <button onClick={() => setModal2(false)}>Cancel</button>
        
        </MyModal>
        </div>
    );
  }
  
  export default DeletePlayer;