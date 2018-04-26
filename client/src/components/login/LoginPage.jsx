import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div style={{textAlign:'center'}}>

				<div style={{maxWidth:'500px',margin:'auto',backgroundColor:'green',color:'white',padding:'25px',borderRadius:'5%'}}>
					<h3>How To Play Hand-Cricket!</h3>
					<h2>1:</h2>
					<h4>One player bats (the Batsman) and the opponent bowls (The Bowler). Each Player has 6 balls.</h4>
					<h2>2:</h2>
					<h4>Both Players "throw" hands (like in Rock Paper Scissors) with any finger(s) extended.<br /> 
						like in Rock Paper Scissors both of the players do this at the same time.<br /> 
						Example: Player 1 (the Batsman first) throws a 5 and Player 2 throws 3. The Batsman scores 5 runs(points).<br /></h4>
					<h2>3:</h2>
					<h4>If the Bowler throws the same finger as the Batter, the roles will switch (Batsman will bowl now and the Bowler will bat). And player 2 
					can score points.</h4>
					<h2>4:</h2>
					<h4>The Player with the highest score wins!</h4>	

					</div>
				<h1>Login</h1>

				<LoginForm onSubmit={this.handleSubmit}/>

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
