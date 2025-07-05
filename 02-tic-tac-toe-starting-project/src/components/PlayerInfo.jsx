//rfc
import React, { useState } from 'react'

export default function PlayerInfo({initialPlayerName,playerSymbol,isActive,savePlayerNameFnc}) {


    const [isEditingState, setEditingState] = useState(false)
    const [playerName, setPlayerName] = useState(initialPlayerName)


  
    function handleEditingState(){
        setEditingState((e) => !e);
        // DO NOT USE : setEditingState(!isEditing) 
        // The function is not instant, it is sheduled 
        savePlayerNameFnc(playerName);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    return (
    <li className={isActive ? "active" : ""}>
        <span className="player">
            {!isEditingState && <span className="player-name">{playerName}</span> }
            {isEditingState && <input type='text' value={playerName} required onChange={handleChange}/> }
            <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={handleEditingState}>
            {isEditingState ? "Save" : "Edit"}
        </button>
    </li>
  )
}
