import React, {PureComponent} from 'react'

export default class LoginForm extends PureComponent {
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
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange }  placeholder="You@Example.com"/>
				</div>
						<br/>
				<div>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } placeholder="Password"/>
				</div>
<br/>
				<button type="submit" style={{padding:'10px',backgroundColor:'black',color:'white',border:'none',fontSize:'18px'}}>Login</button>
			</form>
		)
	}
}
