import React, {PureComponent} from 'react'

export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit} style={{maxWidth:'500px',margin:'auto',backgroundColor:'orange',color:'white',padding:'25px',borderRadius:'5%'}}>
				<div>
					<label htmlFor="firstName"></label>
					<input type="text" name="firstName" id="firstName" value={
						this.state.firstName || ''
					} onChange={ this.handleChange } placeholder="Your First Name" />
				</div>
				<br/>
				<div>
					<label htmlFor="lastName"></label>
					<input type="text" name="lastName" id="firstName" value={
						this.state.lastName || ''
					} onChange={ this.handleChange } placeholder="Your Last Name"/>
				</div>
				<br/>
				<div>
					<label htmlFor="email"></label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } placeholder="You@Example.com"/>
				</div>
				<br/>
				<div>
					<label htmlFor="password"></label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } placeholder="Password"/>
				</div>
				<br/>
				<div>
					<label htmlFor="confirmPassword"></label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } placeholder="Confirm Password"/>
				</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}
				<br/>
				<button type="submit" style={{padding:'10px',backgroundColor:'black',color:'white',border:'none',fontSize:'18px'}}>Sign up</button>
			</form>
		)
	}
}
