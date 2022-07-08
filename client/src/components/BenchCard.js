import React from "react";

function BenchCard({
  player,
  dragStartHandler,
  dragLeaveHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) {
  return (
    <div
      className="bench-card"
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
  );
}

export default BenchCard;
