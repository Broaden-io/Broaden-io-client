import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar'
import serverPath from '../paths'
import axios from 'axios'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      user: {},
      authChecked: false
    }
  }

  componentWillMount() {
    if (!this.state.authChecked) {
      this.checkAuth()
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
         this.props.history.push('/login')
      }
    })
    .catch(error => {
      console.log('error!', error)
       this.props.history.push('/login')
    })
  }

  render() {
    // TODO:add activeClassName for when the link is selected
    return (
      <Route exact path="/" render={() => (
          this.isLoggedIn ? (
            <Sidebar/>
          ) : (
            this.props.history.push('/login')

          )
        )}/>
      );
    }
  }

  export default Home;
