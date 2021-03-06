import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getGames, joinGame, updateGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Paper from 'material-ui/Paper'
import Board from './Board'
import './GameDetails.css'

class GameDetails extends PureComponent {

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  joinGame = () => this.props.joinGame(this.props.game.id)

  makeMove = (points) => {
    const {users, game, updateGame, userId} = this.props
    const board = game.board
    if(game.players[0].userId===userId){
      if (points%2==0) {
    updateGame(game.id, [board[0]+points,board[1]])
  }
    else {
      game.winner=2
      game.status='finished'
      updateGame(game.id,board)
    }
    // game.turn='o'
    // updateGame(game.id,game.turn) }
    } else { 
      if(points%2!=0) {
    updateGame(game.id, [board[0],board[1]+points])
  } else {
    game.winner=1
    game.status='finished'
    updateGame(game.id,board)
  }
  }
  var ul = document.querySelector('#runbuttons')
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
  }



  render() {
    const {game, users, authenticated, userId} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)

    const winner = game.players
      .filter(p => p.symbol === game.winner)
      .map(p => p.userId)[0]

    return (<Paper className="outer-paper">
      <h1>Click Cricket - {game.id}</h1>

      <p>Status: {game.status}</p>

      {/* <p>Batting:{users[userId].firstName}</p> */}
      <p>Your Score: {(game.players[0].userId===userId)?game.board[0]:game.board[1]}</p>
      <p>Overs: {Math.floor(game.balls/6)}.{game.balls%6}</p>

      
  <p> {(game.players[1])?(users[game.players[0].userId].firstName===users[userId].firstName)?users[game.players[1].userId].firstName+'\'s Score: ' + game.board[1]:users[game.players[0].userId].firstName+'\'s Score: ' + game.board[0]:'**Waiting**'}</p>



      {/* {
        game.status === 'started' &&
        player && player.symbol === game.turn &&
        <div>It's your turn!</div>
      } */}

      {
        game.status === 'pending' &&
        game.players.map(p => p.userId).indexOf(userId) === -1 &&
        <button onClick={this.joinGame}>Join Game</button>
      }

      {
        winner &&
        <p>Winner: {users[winner].firstName}</p>
      }

      <hr />

      {
        game.status !== 'pending' &&
        <Board board={game.board} makeMove={this.makeMove} />

        // console.log(game.player)

      }
    </Paper>)
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users,
  players: state.players
})

const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)



