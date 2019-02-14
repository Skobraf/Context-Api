import React from 'react';
import {Fragment} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import AccountProfile from './AccountProfile';
import AccountProvider from './providers/AccountProvider';


const App = () => (
	<AccountProvider>
	    <Router>
	     <Fragment>
	      <NavigationBar />
	      <Switch>
	        <Route 
	          exact 
	          path="/" 
	          render={() => <div>Home</div>}
	        />
	        <Route 
	          exact 
	          path="/account/profile"
	          component={AccountProfile} 
	        />
	      </Switch>
	    </Fragment>
	    </Router>
  	</AccountProvider>
	)

export default App;