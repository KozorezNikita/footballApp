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
          player.position === 1 ? (
            <PlayerCard player={player} key={player.id} />
          ) : null
        )}
      </div>
      <p className="position">Defenders</p>
      <div>
        {players.map((player) =>
          player.position === 2 ? (
            <PlayerCard player={player} key={player.id} />
          ) : null
        )}
      </div>
      <p className="position">Midfielders</p>
      <div>
        {players.map((player) =>
          player.position === 3 ? (
            <PlayerCard player={player} key={player.id} />
          ) : null
        )}
      </div>
      <p className="position">Forwards</p>
      <div>
        {players.map((player) =>
          player.position === 4 ? (
            <PlayerCard player={player} key={player.id} />
          ) : null
        )}
      </div>
    </div>
  );
}

export default PlayersList;
