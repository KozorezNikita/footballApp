import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext, useEffect } from "react";
import PlayersService from "../API/PlayersService";

import BenchCard from "../components/BenchCard";
import SearchBar from "../components/SearchBar";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import MySelect from "../components/UI/select/MySelect";
import { FootballContext } from "../context/FootballContext";
import { useFetching } from "../hooks/useFetching";

function Field({ teamId }) {
  const [copyPlayers, setCopyPlayers] = useState([]);
  const [position, setPosition] = useState(null);
  const [activeSquad, setActiveSquad] = useState([
    {
      id: -1,
      name: null,
      surname: "1",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -2,
      name: null,
      surname: "2",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -3,
      name: null,
      surname: "3",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -4,
      name: null,
      surname: "4",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -5,
      name: null,
      surname: "5",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -6,
      name: null,
      surname: "6",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -7,
      name: null,
      surname: "7",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -8,
      name: null,
      surname: "8",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -9,
      name: null,
      surname: "9",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -10,
      name: null,
      surname: "10",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
    {
      id: -11,
      name: null,
      surname: "11",
      image:
        "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png",
      team_id: null,
      position: null,
    },
  ]);
  const [activeFormation, setActiveFormation] = useState(0);
  const [formations, setFormations] = useState([
    {
      id: 0,
      style: "first",
      tactic: "4-3-3",
      defenders: 4,
      midfielders: 3,
      attackers: 3,
    },
    {
      id: 1,
      style: "second",
      tactic: "4-4-2",
      defenders: 4,
      midfielders: 4,
      attackers: 2,
    },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const [fetchCopyPlayers, isCopyPlayersLoading, copyPlayerError] = useFetching(
    async () => {
      const copyPlayers = await PlayersService.getAll(teamId);
      setCopyPlayers(activeSquad.concat(copyPlayers.data));
    }
  );

  const filteredByPositionPlayers = [...copyPlayers].filter(
    (player, index) => player.position === position && index > 10
  );
  const sortedPlayers = [...copyPlayers]
    .filter((player, index) => index > 10)
    .sort((a, b) => (a.position > b.position ? 1 : -1));

  function dragStartHandler(e, p) {
    setCurrentPlayer(p);
  }

  function dragLeaveHandler(e) {}

  function dragEndHandler(e) {}

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e, player) {
    e.preventDefault();

    setCopyPlayers(
      copyPlayers.map((p) => {
        if (p.id === player.id) {
          return currentPlayer;
        }
        if (p.id === currentPlayer.id) {
          return player;
        }
        return p;
      })
    );
  }

  useEffect(() => {
    fetchCopyPlayers(teamId);
  }, [teamId]);

  return (
    <>
      {isCopyPlayersLoading ? (
        <MyLoader />
      ) : (
        <>
          <h1 className="resize">Please, resize a screen</h1>
          <div className="drag">
            <div className="field">
              {copyPlayers.map((player, index) =>
                index < 11 ? (
                  <div
                    className={formations[activeFormation].style + index}
                    draggable={true}
                    onDragStart={(e) => dragStartHandler(e, player)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, player)}
                  >
                    <div className="active-borders">
                      <div className="top-left"></div>
                      <div className="top-right"></div>
                      <div className="bottom-left"></div>
                      <div className="bottom-right"></div>
                    </div>

                    <img draggable={false} src={player.image} />

                    <p>{player.surname}</p>
                  </div>
                ) : null
              )}
            </div>
            <div className="bench">
              <div className="filters">
                <button
                  className={"active1" + position}
                  onClick={() =>
                    position === 1 ? setPosition(null) : setPosition(1)
                  }
                >
                  Goalkeepers
                </button>
                <button
                  className={"active2" + position}
                  onClick={() =>
                    position === 2 ? setPosition(null) : setPosition(2)
                  }
                >
                  Defenders
                </button>
                <button
                  className={"active3" + position}
                  onClick={() =>
                    position === 3 ? setPosition(null) : setPosition(3)
                  }
                >
                  Midfielders
                </button>
                <button
                  className={"active4" + position}
                  onClick={() =>
                    position === 4 ? setPosition(null) : setPosition(4)
                  }
                >
                  Forwards
                </button>
              </div>
              <div className="bench-list">
                {position === null
                  ? sortedPlayers.map((player) => (
                      <BenchCard
                        player={player}
                        dragStartHandler={dragStartHandler}
                        dragLeaveHandler={dragLeaveHandler}
                        dragEndHandler={dragEndHandler}
                        dragOverHandler={dragOverHandler}
                        dropHandler={dropHandler}
                      />
                    ))
                  : filteredByPositionPlayers.map((player) => (
                      <BenchCard
                        player={player}
                        dragStartHandler={dragStartHandler}
                        dragLeaveHandler={dragLeaveHandler}
                        dragEndHandler={dragEndHandler}
                        dragOverHandler={dragOverHandler}
                        dropHandler={dropHandler}
                      />
                    ))}
              </div>
              <div>
                <MySelect
                  value={activeFormation}
                  onChange={(e) => setActiveFormation(e)}
                  defaultValue="select tactic"
                  options={formations.map((formation) => ({
                    value: formation.id,
                    name: formation.tactic,
                  }))}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Field;

/*


import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useContext, useEffect} from 'react';
import PlayersService from '../API/PlayersService';

import BenchCard from '../components/BenchCard';
import SearchBar from '../components/SearchBar';
import MyLoader from '../components/UI/MyLoader/MyLoader';
import MySelect from '../components/UI/select/MySelect';
import { FootballContext } from '../context/FootballContext';
import { useFetching } from '../hooks/useFetching';


function Field ( {teamId} ) {
  const [copyPlayers, setCopyPlayers] = useState([])
  const [position, setPosition] = useState(null)
  const [activeSquad, setActiveSquad] = useState([
    {id: -1, name: null, surname: "1",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -2, name: null, surname: "2",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -3, name: null, surname: "3",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -4, name: null, surname: "4",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -5, name: null, surname: "5",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -6, name: null, surname: "6",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -7, name: null, surname: "7",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -8, name: null, surname: "8",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -9, name: null, surname: "9",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -10, name: null, surname: "10",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null },
    {id: -11, name: null, surname: "11",  image:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/squad_default_img.png", team_id: null, position: null }
])
  const [activeFormation, setActiveFormation] = useState(0)
  const [formations, setFormations] = useState([
      {"style": "first", "tactic": "4-3-3",  "defenders": 4, "midfielders": 3, "attackers": 3 } ,
      {"style": "second", "tactic": "4-4-2",  "defenders": 4, "midfielders": 4, "attackers": 2 } 
    ])
  const [currentPlayer, setCurrentPlayer] = useState(null);


  const [fetchCopyPlayers, isCopyPlayersLoading, copyPlayerError] = useFetching(
    async () => {
      const copyPlayers = await PlayersService.getAll(teamId);
      setCopyPlayers(copyPlayers.data.concat(activeSquad));
      
    }
  );



  
  const filteredByPositionPlayers = [...copyPlayers].filter(player => player.position === position)
  const sortedPlayers = [...copyPlayers].sort((a,b) => a.position > b.position ? 1: -1)




  function dragStartHandler (e, p) {
    setCurrentPlayer(p)
}

function dragLeaveHandler (e) {
    
}

function dragEndHandler (e) {
    
}

function dragOverHandler (e) {
    e.preventDefault()
}

function dropHandler (e, player) {
  e.preventDefault()
  
  setActiveSquad(activeSquad.map(p => {
      if(p.id === player.id ) {
          return currentPlayer
      } 
      if (p.id === currentPlayer.id ) {
          return activeSquad[p]
      }
      return p 
  })) 
  setCopyPlayers(copyPlayers.map(p => {
      if(p.id === player.id) {
          return currentPlayer
      }
      if (p.id === currentPlayer.id) {
          return player
      }       
      return p    
  }))
  
}







useEffect(() => {
  fetchCopyPlayers(teamId)
  
}, [teamId])



  





    return (
        <>
            {isCopyPlayersLoading ? (
       <MyLoader/>
      ) : 
      <>
      
      <h1 className="resize">Please, resize a screen</h1>
        <div className="drag">
          




          <div className="field">
              {activeSquad.map((card, index) => 
                
                
                <div className={formations[activeFormation].style + index} 
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragOver={(e) => dragOverHandler(e)} 
                onDrop={(e) => dropHandler(e, card)}
                
                
                >
                <img  src={card.image} />
          
                <p>{card.surname}</p>
                
                
              
                </div>
                
                )}

          </div>
          <div className="bench">
            <div className="filters">
              <button className={"active1" + position} onClick={() => position === 1 ? setPosition(null) : setPosition(1)}>Goalkeepers</button>
              <button className={"active2" + position} onClick={() => position === 2 ? setPosition(null) : setPosition(2)}>Defenders</button>
              <button className={"active3" + position} onClick={() => position === 3 ? setPosition(null) : setPosition(3)}>Midfielders</button>
              <button className={"active4" + position} onClick={() => position === 4 ? setPosition(null) : setPosition(4)}>Forwards</button>
            </div>
              <div className="bench-list">{position === null ? sortedPlayers.map(player => <BenchCard player={player} dragStartHandler={dragStartHandler} dragOverHandler={dragOverHandler} dropHandler={dropHandler}/>) : filteredByPositionPlayers.map(player => <BenchCard player={player} dragStartHandler={dragStartHandler} dragOverHandler={dragOverHandler} dropHandler={dropHandler} />)}</div>
              <div>
              <MySelect
                  value={activeFormation}
                  onChange={(e) => setActiveFormation(e)}
                  defaultValue="select tactic"
                  options={[
                    { value: 0, name: "4-3-3" },
                    { value: 1, name: "4-4-2" },
                    
                  ]}
              />
              </div>
          </div>
          
          
          
          
        </div>
        </>
       }
            
            

        </>
    );
};

export default Field;

*/
