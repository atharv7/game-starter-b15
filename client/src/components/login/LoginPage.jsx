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
					<h3>How To Play Click-Cricket!</h3>
					<h2>1:</h2>
					<h4>Both the players have options to score runs ( points ) by clicking on buttons from 1 to 6.</h4>
					<h2>2:</h2>
					<h4>Player 1 can only choose ODD runs and Player 2 can only choose EVEN runs to score.<br /></h4>
					<h2>3:</h2>
					<h4>The player with the higher score wins at the end.</h4>
		

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
