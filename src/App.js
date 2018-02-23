import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Provider } from 'react-redux';
import history from './routers/history';
import ConfigureStore from './store/ConfigureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="wrapper">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
