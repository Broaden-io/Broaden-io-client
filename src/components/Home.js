import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import serverPath from '../paths';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

class Home extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props)
    this.isAuth = this.isAuth.bind(this)
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
      const cookieValue = (cookies.get("RubricsApp") !== "") ? cookies.get("RubricsApp") : false

      this.setState({
        isLoggedIn: cookieValue,
        authChecked: true
      })
    }
  }

  checkAuth() {
    axios.get(`${serverPath}/authcheck`)
    .then(response => {
      if (response.isLoggedIn) {
        this.setState({
          isLoggedIn: true,
          user: response.user,
          authChecked: true
        })
      } else {
        this.props.history.push('/login')
      }
    })
    .catch(error => {
      this.props.history.push('/login')
    })
  }

  isAuth() {

    return ((this.state.user.id) ? (this.props.history.push(`/${this.state.user.id}`)) : (this.props.history.push('/signup')))
  }

  render() {

    return (
      <div>
        <Route path='/:userToken' render={() => (
          (this.state.isLoggedIn ) ? (
            <Sidebar />
            ) : (
              this.props.history.push('/login')
            )
          )}
        />
        {this.isAuth()}
      </div>
      );
    }
  }

  export default withCookies(Home);
