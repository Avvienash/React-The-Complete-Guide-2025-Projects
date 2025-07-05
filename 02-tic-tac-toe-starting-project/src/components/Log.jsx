//rfc
import React from 'react'

export default function Log({log}) {
  return (
    <ol id="log">
        {log.map(turn => <li key={`${turn.row} ${turn.col}`}> {turn.player} selected ({turn.row},{turn.col})</li>)}
    </ol>
  )
}
