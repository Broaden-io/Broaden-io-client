import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Login from './Login';
import serverPath from '../paths';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    console.log("logged in: " + this.props.auth.isAuthenticated)

    return (
      <div>
        { this.props.auth.isAuthenticated && <Sidebar /> }
        { !this.props.auth.isAuthenticated && <Login /> }
      </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  export default connect(mapStateToProps)(Home);
