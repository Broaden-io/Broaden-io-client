import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './components/Routes'
import { Provider } from 'react-redux';
import history from './routers/history';
import ConfigureStore from './store/ConfigureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
