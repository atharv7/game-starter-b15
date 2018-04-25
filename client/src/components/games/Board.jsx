import React from 'react'
import './Board.css'

const renderCel = (makeMove, hasTurn) => {
  return (null
    // <button
    //   className="board-tile"
    //   disabled={hasTurn}
    //   onClick={() => makeMove()}
    //   key={`${}-${}`}
    // >{ || '-'}</button>
  )
}





export default () =>
  <div>
  <button
    className="board-tile"
    key={`1`}
   >{1}</button>
  <button
    className="board-tile"
    key={`2`}
  >{2}</button>
  <button
    className="board-tile"
    key={`3`}
  >{3}</button>
  <button
    className="board-tile"
    key={`4`}
  >{4}</button>
  <button
    className="board-tile"
    key={`5`}
  >{5}</button>
  <button
    className="board-tile"
    key={`6`}
  >{6}</button>
  </div>
