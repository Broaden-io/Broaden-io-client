import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider, withCookies } from 'react-cookie'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'


class App extends Component {

  render() {
    return (
      <CookiesProvider >
        <BrowserRouter>
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}

export default App;
