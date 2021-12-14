import React from "react";
import PlayerCard from "./PlayerCard";

function PlayersList({ players }) {
  if (!players.length) {
    return <p className="empty">There is no players with your search!</p>;
  }

  return (
    <div className="player-list">
      <p className="position">Goalkeepers</p>
      <div>
        {players.map((player) =>
          player.position === "goalkeeper" ? (
            <PlayerCard player={player} />
          ) : null
        )}
      </div>
      <p className="position">Defenders</p>
      <div>
        {players.map((player) =>
          player.position === "defender" ? <PlayerCard player={player} /> : null
        )}
      </div>
      <p className="position">Midfielders</p>
      <div>
        {players.map((player) =>
          player.position === "midfielder" ? (
            <PlayerCard player={player} />
          ) : null
        )}
      </div>
      <p className="position">Forwards</p>
      <div>
        {players.map((player) =>
          player.position === "forward" ? <PlayerCard player={player} /> : null
        )}
      </div>
    </div>
  );
}

export default PlayersList;

/*

import React from "react";
import PlayerCard from "./PlayerCard";


function PlayersList({ players}) {
  if (!players.length) {
    return <p className="empty">There is no players with your search!</p>;
  }

  

  return (
    <div className="product-list">
      <div>
        <p>goalkeeper</p>
        {players.map(player => player.position === "goalkeeper" ? <PlayerCard player={player} />  : null)}
    </div>
    <div>
        <p>Defenders</p>
        {players.map(player => player.position === "defender" ? <PlayerCard player={player} />  : null)}
    </div>
    <div>
        <p>Midfielders</p>
        {players.map(player => player.position === "midfielder" ? <PlayerCard player={player} />  : null)}
    </div>
    <div>
        <p>Forward</p>
        {players.map(player => player.position === "forward" ? <PlayerCard player={player} />  : null)}
    </div>
    </div>
  );
}

export default PlayersList;











import React from "react";
import PlayerCard from "./PlayerCard";


function PlayersList({ players}) {
  if (!players.length) {
    return <p className="empty">There is no players with your search!</p>;
  }

  

  return (
    <div className="product-list">
    
      {players.map((player) => (
        <>
        <p>Goalkeepers</p>
        <PlayerCard
          player={player}
          key={player.id}
        />
        </>
      ))}
    </div>
  );
}

export default PlayersList;

*/
