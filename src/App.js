import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Rubric from './components/Rubric';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Dashboard} exact={true } />
            <Route path="/rubric" component={Rubric} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
