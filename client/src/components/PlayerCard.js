import React from "react";
import { useHistory } from "react-router-dom";
import CardHover from "./CardHover";

function PlayerCard({ player }) {
  const router = useHistory();

  return (
    <div className="player-card">
      <img
        src={player.image}
        alt={player.surname}
        onClick={() => router.push(`/footballApp/${player.id}`)}
      />

      <p
        className="back"
        onClick={() => router.push(`/footballApp/${player.id}`)}
      >
        Goals: {player.goals}
        <br />
        Assists: {player.assists}
        <br />
        Yellow cards: {player.yellow_cards}
        <br />
        Red cards: {player.red_cards}
        <br />
        Average rating: {player.average_rating}
      </p>

      <p className="name">{player.name}</p>
      <p className="surname ">{player.surname}</p>
    </div>
  );
}

export default PlayerCard;

/* 


*/
