import React, { Component } from 'react';
import LinkListPage from './LinkListPage';
import { Switch, Route } from 'react-router-dom';
import CreateLink from './CreateLink';
import Header from './Header';
import Login from './Login';
import UserListPage from './UserListPage';

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       <div>
         <Switch>
           <Route exact path='/' component={LinkListPage} />
           <Route exact path='/login' component={Login} />
           <Route exact path='/create' component={CreateLink} />
           <Route exact path='/users' component={UserListPage} />
           
         </Switch>
       </div>
     </div>
    );
  }
}

export default App;
