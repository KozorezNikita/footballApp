import React from "react";
import { useHistory } from "react-router-dom";

function PlayerCard({ player, index }) {
  const router = useHistory();

  return (
    <div className="player-card">
      <img
        src={player.image}
        alt={player.surname}
        onClick={() => router.push(`/footballApp/${player.id}`)}
      />

      <p>{player.name}</p>
      <p className="surname">{player.surname}</p>
    </div>
  );
}

export default PlayerCard;
