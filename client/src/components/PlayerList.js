import React from "react";
import PlayerCard from "./PlayerCard.js";

function PlayerList({ players }) {
    return (
      <section>
        {players.map( player => (
          <PlayerCard 
            key={player.id} 
            name={player.name} 
            country={player.country}
            searches={player.searches}
          />
        ))}
      </section>
    )
  }

export default PlayerList;