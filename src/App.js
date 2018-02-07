import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.css';
import Dashboard from './components/Dashboard';
import Rubric from './components/Rubric';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/rubric" component={Rubric} />
            <Route path="/register" component={RegisterForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
