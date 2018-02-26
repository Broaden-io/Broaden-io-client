import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Login from './Login';
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        { this.props.auth.isAuthenticated && <Sidebar {...this.props}/> }
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
