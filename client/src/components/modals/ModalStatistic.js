import MyModal from "../UI/Modal/MyModal";
import MyInput from "../UI/input/MyInput";
import axios from "axios";

function ModalStatistic({ create, setCreate, modal, setModal }) {
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(
      "https://pure-headland-63139.herokuapp.com/api/statistic",
      create
    );
    /*setPlayer({ goals: create.goals, assists: create.assists, yellow_cards: create.yellow_cards, red_cards: create.red_cards, average_rating: create.average_rating, player_id: params.id  })*/
    setModal(false);
    /*setCreate({ goals: "", assists: "", yellow_cards: "", red_cards: "", average_rating: "", player_id: params.id  })*/
  }

  return (
    <div className="modal-stat">
      <MyModal visible={modal} setVisible={setModal}>
        <form className="form" onSubmit={handleSubmit}>
          <label>Goals</label>
          <MyInput
            value={create.goals}
            placeholder="goals"
            onChange={(e) => setCreate({ ...create, goals: e.target.value })}
          />
          <br />
          <label>Assists</label>
          <MyInput
            value={create.assists}
            placeholder="assists"
            onChange={(e) => setCreate({ ...create, assists: e.target.value })}
          />
          <br />
          <label>Yellow cards</label>
          <MyInput
            value={create.yellow_cards}
            placeholder="yellow_cards"
            onChange={(e) =>
              setCreate({ ...create, yellow_cards: e.target.value })
            }
          />
          <label>Red cards</label>
          <MyInput
            value={create.red_cards}
            placeholder="red_cards"
            onChange={(e) =>
              setCreate({ ...create, red_cards: e.target.value })
            }
          />
          <br />
          <label>Average rating</label>
          <MyInput
            value={create.average_rating}
            placeholder="average_rating"
            onChange={(e) =>
              setCreate({ ...create, average_rating: e.target.value })
            }
          />
          <label>Player id</label>
          <MyInput value={create.player_id} placeholder="player_id" />
          <br />
          <br />
          <br />
          <button disabled={Object.values(create).some((val) => val === "")}>
            Press to create a statistic for player!
          </button>
        </form>
      </MyModal>
      <p>
        This player has no stats!
        <br /> Please, add some info
      </p>
      <button onClick={() => setModal(true)}>add stats</button>
    </div>
  );
}

export default ModalStatistic;
