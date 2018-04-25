import React from 'react'
import './Board.css'

// const renderButton = (makeMove, hasTurn) => {
//   return (null
//     // <button
//     //   className="board-tile"
//     //   disabled={hasTurn}
//     //   onClick={() => makeMove()}>
//     // </button>
//   )
// }



export default (props) => 
  <div>
    
  <button
    className="board-tile"
    // disabled={hasTurn}
    key={`1`}
    onClick={() => props.makeMove(1)}
   >{1}</button>
  <button
    className="board-tile"
    key={`2`}
    // disabled={hasTurn}
    onClick={() => props.makeMove(2)}
  >{2}</button>
  <button
    className="board-tile"
    key={`3`}
    onClick={() => props.makeMove(3)}
  >{3}</button>
  <button
    className="board-tile"
    key={`4`}
   onClick={() => props.makeMove(4)}
  >{4}</button>
  <button
    className="board-tile"
    key={`5`}
    onClick={() => props.makeMove(5)}
  >{5}</button>
  <button
    className="board-tile"
    key={`6`}
    onClick={() => props.makeMove(6)}
  >{6}</button>
  </div>
