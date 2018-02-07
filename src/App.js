import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.css';
import Dashboard from './components/Dashboard';
import Rubric from './components/Rubric';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import axios from 'axios';
const serverURL = 'https://rubrics-dashboard.herokuapp.com';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      errorMessage: '',
      isError: false
    }
  }

  requestRegister(e, user) {
    console.log(user);
    // make a call to the server
    axios.post(`${serverURL}/signup`, user)
    .then(res => {
      console.log(res);
      if (res.status == 200) {
          this.setState({isAuthenticated: true, errorMessage: '', isError: false });
      }
    })
    .catch(err => {
      console.log('Failed to register');
      this.setState({isAuthenticated: false, errorMessage: err.message, isError: true })
    })
  }


  render() {

    const RenderRegisterForm = (props) => {
      return (
        <RegisterForm
          requestRegister={this.requestRegister.bind(this)}
          {...props}
        />
      );
    }

    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/rubric" component={Rubric} />
            <Route path="/register" render={RenderRegisterForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
