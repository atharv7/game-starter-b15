import React from 'react'
import './Board.css'



// const renderButton = (makeMove) => {}
//   return (null
//     // <button
//     //   className="board-tile"
//     //   disabled={hasTurn}
//     //   onClick={() => makeMove()}>
//     // </button>
//   )
// }



export default (props) => 
  <div id='runbuttons' style={{textAlign:'center'}}>
    
  <button
    className="circle"
    // disabled={hasTurn}
    key={`1`}
    onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
   >1</button>
  <button
    className="circle"
    key={`2`}
    // disabled={hasTurn}
    onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
  >2</button>
  <button
    className="circle"
    key={`3`}
    onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
  >3</button>
  <button
    className="circle"
    key={`4`}
   onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
  >4</button>
  <button
    className="circle"
    key={`5`}
    onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
  >5</button>
  <button
    className="circle"
    key={`6`}
    onClick={(e) => props.makeMove(parseInt(e.target.innerHTML))}
  >6</button>
  </div>
