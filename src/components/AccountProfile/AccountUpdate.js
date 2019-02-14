import React from 'react';

class AccountUpdate extends React.Component {
	state = {
		username: this.props.username,
		membershipLevel: this.props.membershipLevel
	}
	handleOnChange = ({ target: {value, name }}) => {
		this.setState({
			[name]: value
		})
	}
	render() {
		const {membershipLevel, username} = this.state;

		return (
			<div>
				<form>
					<label htmlFor="username">New Username</label>
					<div>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.handleOnChange}
						/>
					</div>
					<label htmlFor="membershipLevel">Membership Level</label>
					<div>
						<select
							name="membershipLevel"
							value={membershipLevel}
							onChange={this.handleOnChange}
							>
							<option value="Bronze">Bronze</option>
							<option value="Silver">Silver</option>
							<option value="Gold">Gold</option>
						</select>
					</div>
					<button>Save</button>
				</form>
			</div>

			)
	}
}

export default AccountUpdate;