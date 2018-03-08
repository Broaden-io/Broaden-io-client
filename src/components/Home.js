import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import Sidebar from './Sidebar';
import Login from './Login';
import SignUp from './SignUp'
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {console.log("PROPS", this.props)}
        { this.props.auth.isAuthenticated && <Redirect to={`/${localStorage.getItem('username')}/dashboard`} /> }
        { !this.props.auth.isAuthenticated && <Redirect to="/login"/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(Home))
