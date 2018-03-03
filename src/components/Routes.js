import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Rubric from './Rubric';
import Sidebar from './Sidebar'

class Routes extends Component {

  redirect() {

  }

  render() {


    return (
      <div className="wrapper">
        {console.log('ISLOGGEDIN', isLoggedIn)}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

          {(isLoggedIn) ? (<Redirect from="/" to={`/${localStorage.getItem('username')}/dashboard`} />) :
          (<Redirect from="/" to="/login" />)}
        </Switch>
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
