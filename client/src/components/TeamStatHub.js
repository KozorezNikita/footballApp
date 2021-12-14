import { useState } from "react";
import MySelect from "./UI/select/MySelect";

function TeamStatHub({ players, teams }) {
  const [filter, setFilter] = useState("goals");

  return (
    <div className="team-hub">
      <div className="club">
        <img src={teams.badge} /> <h1>{teams.team}</h1>
        <p>
          Nickname: <span>{teams.nickname}</span>
        </p>
        <p>
          Year founded: <span>{teams.year}</span>
        </p>
        <p>
          Stadium: <span>{teams.stadium}</span>
        </p>{" "}
        <p>
          History overall: <span>{teams.description}</span>
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
          ]}
        />

        {[...players]
          .sort((a, b) => b[filter] - a[filter])
          .map((player, index) => (
            <>
              {" "}
              {index === 0 ? (
                <div className="player-card">
                  <img src={player.image} />{" "}
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
                <div className="others">
                  <p>{index + 1} .</p>{" "}
                  <p>
                    {" "}
                    {player.name.slice(0, 1) + ". "}
                    {player.surname}
                  </p>{" "}
                  <p>{player[filter]}</p>{" "}
                </div>
              )}{" "}
            </>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
}

export default TeamStatHub;

/*


        <MySelect
        value={filter}
        onChange={(filter) => setFilter( filter )}
        defaultValue="sort by"
        options={[
          { value: "goals", name: "by goals" },
          { value: "assists", name: "by assists" },
          { value: "yellow_cards", name: "by goals" },
          { value: "red_cards", name:  "by assists" },
        ]}
         />





         {[...players].sort((a,b) => b.filter - a.filter).map(player => <p>NAME  { player.name} SURNAME {player.surname} GOALS {player.goals} ASSISTS {player.assists}</p>)}
        






















var sortedPlayers = [...players];
    sortedPlayers.sort((a, b) => b.goals - a.goals);
{sortedPlayers.map((player, i) => (<div>{player.goals} {player.surname}</div>))}
*/
