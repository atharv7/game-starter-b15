import React from 'react'
import './Board.css'







export default ({board, makeMove}) => [1].map((cells, rowIndex) =>
  <div key={rowIndex}>
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
