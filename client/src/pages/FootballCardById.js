import { useEffect, useState } from "react";
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

function FootballCardById() {
  const params = useParams();
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

  useEffect(() => {
    fetchPlayersById(params.id);
  }, []);




 

  



  
   
    return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : player !== "" ? (
        <div className="modal-select">
        <div className="card-id">
          
          <PlayerCard player={player} />

          <div className="stats">
          <span onClick={() => setModalDelete(true)}><FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon></span>
            <p>{player.average_rating}</p>
            <p>Goals: {player.goals}</p>
            <p>Assists: {player.assists}</p>
            <p>Yellow cards: {player.yellow_cards}</p>
            <p>Red cards: {player.red_cards}</p>
            <button onClick={() => setModalEditPlayer(true)}>edit player</button>
            <button onClick={() => setModalEditStat(true)}>edit stats</button>
          </div>
            

        </div>

        <EditStatistic player={player} setPlayer={setPlayer} create={create} modalEditStat={modalEditStat} setModalEditStat={setModalEditStat} />
        <EditPlayer player={player} setPlayer={setPlayer}  modalEditPlayer={modalEditPlayer} setModalEditPlayer={setModalEditPlayer} />
        <DeletePlayer player={player}   modalDelete={modalDelete} setModalDelete={setModalDelete} />

        
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import PlayersService from "../API/PlayersService";
import PlayerCard from "../components/PlayerCard";
import ModalStatistic from "../components/modals/ModalStatistic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import MyModal from "../components/UI/Modal/MyModal";
import axios from "axios";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/select/MySelect";

function FootballCardById() {
  const params = useParams();
  const [player, setPlayer] = useState({});
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
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




  async function handleClick (id)  {
      await axios.delete(`https://pure-headland-63139.herokuapp.com/api/players/${id}`)
    .then(response => {
      if (response.data !== null) {
        alert("player deleted from a database")
      }
    })
  }

  async function handleSubmit(e, id) {
    e.preventDefault();
    await axios.put(
      `https://pure-headland-63139.herokuapp.com/api/players/${id}`,
      player
    );
    setPlayer({ goals: create.goals, assists: create.assists, yellow_cards: create.yellow_cards, red_cards: create.red_cards, average_rating: create.average_rating, player_id: params.id  })
    setModal(false);
    setCreate({ goals: "", assists: "", yellow_cards: "", red_cards: "", average_rating: "", player_id: params.id  })
  }



  async function handleSubmitStat(e, player_id) {
    
    e.preventDefault();
    
    await axios.put(
      `https://pure-headland-63139.herokuapp.com/api/statistic/${player_id}`, player
    );
    setModal(false);
  }
   
    return (
    <>
      {isLoading ? (
        <MyLoader />
      ) : player !== "" ? (
        <>
        <div className="card-id">
          
          <PlayerCard player={player} />

          <div className="stats">
          <span onClick={() => setModal2(true)}><FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon></span>
            <p>{player.average_rating}</p>
            <p>Goals: {player.goals}</p>
            <p>Assists: {player.assists}</p>
            <p>Yellow cards: {player.yellow_cards}</p>
            <p>Red cards: {player.red_cards}</p>
            <span onClick={() => setModal1(true)}><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></span>
            <button onClick={() => setModal3(true)}>Click to change stats</button>
          </div>
            

        </div>




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






      





        
        
        
        
        
        
        <MyModal visible={modal2} setVisible={setModal2}> 
        <div className="modal-delete">do you want to delete a player from database? 
        <button onClick={() => {  handleClick(player.id) ;setModal2(false)}}>delete player</button> <button>no</button>
        </div>
        </MyModal>
        </>
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



*/ 