import React from 'react';
import {Fragment} from 'react';
import AccountDetails from './AccountDetails';
import AccountUpdate from './AccountUpdate';

const AccountProfile = ({account: { username, dateJoined, membershipLevel } }) => (
	<Fragment>
	<AccountDetails username={username} dateJoined={dateJoined} memebershipLevel={membershipLevel} />
	<AccountUpdate username={username} membershipLevel={membershipLevel} />
	</Fragment>
	)

export default AccountProfile;