import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import RubricsIndex from './RubricsIndex';
import Sidebar from './Sidebar'
import Login from './Login';

class Routes extends Component {

  render() {
    return (
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/:username" component={Sidebar} />
        <Route path="/rubrics" component={RubricsIndex} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default Routes;
