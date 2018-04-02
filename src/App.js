import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './components/Routes'
import { Provider } from 'react-redux';
import history from './routers/history';
import ConfigureStore from './store/ConfigureStore';
import mixpanel from 'mixpanel-browser'

const store = ConfigureStore();

class App extends Component {

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Website Launched");
  }

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
