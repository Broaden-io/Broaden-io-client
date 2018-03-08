import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Login from './Login';
import Rubric from './Rubric';
import Sidebar from './Sidebar'

const AuthCheck = withRouter(
  (props) =>
  props.auth.isAuthenticated ? (
    <Sidebar/>
  ) : (
    <Login/>
  )
);

class Routes extends Component {

  redirect() {

  }

  render() {
    const isLoggedIn = this.props.auth.isAuthenticated

    return (
      <div className="wrapper">
        {console.log('ISLOGGEDIN', isLoggedIn)}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        { isLoggedIn ? <Sidebar/> : <Login/> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(Routes))
