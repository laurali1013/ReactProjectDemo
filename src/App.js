import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.less';

import Login from './login/login';
import Admin from './admin/admin'

class App extends Component {

  render() { 
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Admin} />
        <Redirect to='/login'/>
      </Switch>
    );
  }
}
 
export default App;