import React from 'react';
import UserNew from './components/UserNew';
import GetUserList from './containers/GetUserListContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserNew />
        <GetUserList />
      </div>
    )
  }
}

export default App;
