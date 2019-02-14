import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import AccountProfile from './AccountProfile';

const account = {
	username: 'Ayoub',
	dateJoined: '9/1/18',
	membershipLevel: 'Silver'
}

const App = () => (
	<Router>
		<Fragment>
			<NavigationBar username={username} />
			<Switch>
				<Route
					exact
					path="/"
					render= {() => <div>Home</div>}
				/>
				<Route
					exact
					path="/account/profile"
					render={ () => <AccountProfile account={account} />}
				 />
			</Switch>
		</Fragment>
	</Router>
	)

export default App;