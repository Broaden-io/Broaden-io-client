import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.css';
import Dashboard from './components/Dashboard';
import Rubric from './components/Rubric';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/rubric" component={Rubric} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
