import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faFutbol, faHandsHelping } from "@fortawesome/free-solid-svg-icons";


function CardHover( {player} ) {
    return(
    <div className="card-info">
    {player.position === 1 || player.position === 2 ? 
      <>
      <div>
      <span>
      <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
    </span>
    <p>{player.yellow_cards}</p> 
    </div>
    <div>
    <span>
      <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
    </span> 
    <p>{player.red_cards}</p></div>
    <div><p>{player.average_rating.toFixed(2)}</p></div>
        </>  : 
    <>
    <div>
    <span className="goals">
      <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
    </span>
    <p>{player.goals}</p> 
    </div> 
    <div>
    <span className="assists">
      <FontAwesomeIcon icon={faHandsHelping}></FontAwesomeIcon>
    </span>
    <p>{player.assists}</p>
    </div> 
    <div><p>{player.average_rating}</p></div>
        </> 
  }
    </div>
    )
}


export default CardHover;