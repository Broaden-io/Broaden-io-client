import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Rubric from './components/Rubric';
import Home from './components/Home'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SignUp from './components/SignUp'
import Login from './components/Login'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
