import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import serverPath from '../paths';
import axios from 'axios';
import Dashboard from './Dashboard'
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

class Home extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      user: {},
      authChecked: false
    }
  }

  componentWillMount() {
    const { cookies } = this.props;

    if (!this.state.authChecked) {
      //this.checkAuth()
      // check if the cookie is stored
      this.setState({
        isLoggedIn: cookies.get("RubricsApp") !== "",
        authChecked: true
      })
    }
  }

  checkAuth() {
    axios.get(`${serverPath}/authcheck`)
    .then(response => {
      if (response.isLoggedIn) {
        console.log(response.message)
        this.setState({
          isLoggedIn: true,
          user: response.user,
          authChecked: true
        })
      } else {
        console.log(response.message)
         return <Redirect push={true} to='/login' />
      }
    })
    .catch(error => {
      console.log('error!', error)
       return <Redirect push to='/login' />
    })
  }

  render() {
    // TODO:add activeClassName for when the link is selected
    return (
      <Route exact path="/" render={() => (
          this.state.isLoggedIn ? (
            <Dashboard />
          ) : (
            <Redirect to="/login"/>

          )
        )}/>
      );
    }
  }

  export default withCookies(Home);
