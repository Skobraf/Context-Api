import AccountDetails from 'AccountDetails';
import AccountUpdate from 'AccountUpdate';

const AccountProfile = ({account: { username, dateJoined, memebershipLevel } }) => (
	<Fragment>
	<AccountDetails username={username} dateJoined={dateJoined} memebershipLevel={memebershipLevel} />
	<AccountUpdate username={username} memebershipLevel={memebershipLevel} />
	</Fragment>
	)

export default AccountProfile;