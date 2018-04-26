import 'mocha'
import { equal } from 'assert'
import { calculateWinner } from './logic'
import { Board } from './entities'

describe('calculateWinner()', () => {

  it('should work for when player 1 wins', () => {
    const board: Board = [100,70]
    
    return calculateWinner(board) == 1
  })

  it('should work for when player 2 wins', () => {
    const board: Board = [50, 51]
    
    return calculateWinner(board) == 2
  })

  it('should work for a draw', () => {
    const board: Board = [50,50]
    return calculateWinner(board) == 3
  })

})
