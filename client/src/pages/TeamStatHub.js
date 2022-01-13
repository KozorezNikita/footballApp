import { useState } from "react";
import MySelect from "../components/UI/select/MySelect";

function TeamStatHub({ players, team }) {
  const [filter, setFilter] = useState("goals");

  return (
    <div className="team-hub">
      <div className="club">
        <img src={team.badge} alt={team.surname} /> <h1>{team.team}</h1>
        <p>
          Nickname: <span>{team.nickname}</span>
        </p>
        <p>
          Year founded: <span>{team.year}</span>
        </p>
        <p>
          Stadium: <span>{team.stadium}</span>
        </p>{" "}
        <p>
          History overall: <span>{team.description}</span>
        </p>{" "}
      </div>
      <div className="team-stat">
        <MySelect
          value={filter}
          onChange={(filter) => setFilter(filter)}
          defaultValue="sort by"
          options={[
            { value: "goals", name: "goals" },
            { value: "assists", name: "assists" },
            { value: "yellow_cards", name: "yellow cards" },
            { value: "red_cards", name: "red cards" },
            { value: "average_rating", name: "average rating" },
          ]}
        />

        {[...players]
          .sort((a, b) => b[filter] - a[filter])
          .map((player, index) => (
            <div key={player.name}>
              {" "}
              {index === 0 ? (
                <div className="player-card" >
                  <img src={player.image} alt={player.surname} />{" "}
                  <div className="info">
                    <p>{index + 1} .</p>
                    <p>
                      {" "}
                      {player.name.slice(0, 1) + "."} {player.surname}
                    </p>{" "}
                    <p>{player[filter]}</p>
                  </div>
                </div>
              ) : (
                <div className="others" >
                  <p>{index + 1} .</p>{" "}
                  <p>
                    {" "}
                    {player.name.slice(0, 1) + ". "}
                    {player.surname}
                  </p>{" "}
                  <p>{player[filter]}</p>{" "}
                </div>
              )}{" "}
            </div>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
}

export default TeamStatHub;
