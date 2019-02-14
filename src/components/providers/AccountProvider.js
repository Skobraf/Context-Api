import React from 'react'
// Set Up The Initial Context
const AccountContext = React.createContext()
// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer
// Create the provider using a traditional React.Component class
class AccountProvider extends React.Component {
  state = {
    username: 'Ayoub',
    dateJoined: '9/1/18',
    membershipLevel: 'Silver',
    updateAccount: updatedAccount => this.updateAccount(updatedAccount)
  }
  updatedAccount = updatedAccount => {
    this.setState(prevState => ({
      ...prevState,
      ...updatedAccount
    }))
  }
  render () {
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
       <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}
export default AccountProvider