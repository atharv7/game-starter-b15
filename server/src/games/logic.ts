import { ValidatorConstraint } from 'class-validator'
import { Board, Player} from './entities'

@ValidatorConstraint()
export class IsBoard {

  validate(board: Board) {

    if(board && Player)
    {return true}
    else
    {return true}
    // const symbols = [ '1', '2', '3', '4', '5', '6' ]
    // return board.length === 3 &&
    //   board.every(row =>
    //     row.length === 6 &&
    //     row.every(symbol => symbols.includes(symbol))
      // )
  }
}

export const isValidTransition = (playerSymbol: Symbol, from: Board, to: Board) => {
  // const changes = from
  //   .map(
  //     (row, rowIndex) => row.map((symbol, columnIndex) => ({
  //       from: symbol,
  //       to: to[rowIndex][columnIndex]
  //     }))
  //   )
  //   .reduce((a,b) => a.concat(b))
  //   .filter(change => change.from !== change.to)
  if(playerSymbol && from && to) {
return true
} else {
  return true
}
  // return changes.length === 1 &&
  //   changes[0].to === playerSymbol &&
  //   changes[0].from === null

}

export const calculateWinner = (board: Board) =>{
  // board
  //   .concat(
  //     // vertical winner
  //     [0, 1, 2].map(n => board.map(row => row[n])) as Row[]
  //   )
  //   .concat(
  //     [
  //       // diagonal winner ltr
  //       [0, 1, 2].map(n => board[n][n]),
  //       // diagonal winner rtl
  //       [0, 1, 2].map(n => board[2-n][n])
  //     ] as Row[]
  //   )
  //   .filter(row => row[0] && row.every(symbol => symbol === row[0]))
  //   .map(row => row[0])[0] || null
  if(board[0]>board[1]) {
    return 1
  } else {
      if(board[0]===board[1]){
        return 2
      } else {
    return 3
  }
  }
}
// export const finished = (board: Board): boolean =>
//   board
//     .reduce((a,b) => a.concat(b) as Symbol)
//     .every(symbol => symbol !== null)