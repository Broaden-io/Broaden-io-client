import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import serverPath from '../paths';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Route path='/:userToken' render={() => (
          (this.props.isAuthenticated ) ? (
            <Sidebar />
            ) : (
              this.props.history.push('/login')
            )
          )}
        />
      </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  export default connect(mapStateToProps)(Home);
