import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="wrapper">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
