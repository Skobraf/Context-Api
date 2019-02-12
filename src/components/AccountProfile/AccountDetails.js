import React from 'react';

const AccountDetails = ({ username, dateJoined, memebrshipLevel }) => (
	<div>
		<p>Username: {username}</p>
		<p>Date Joined: {dateJoined}</p>
		<p>Membership Level: {memebrshipLevel}</p>
	</div>
	)

export default AccountDetails;