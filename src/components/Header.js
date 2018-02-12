import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    var loggedIn = false;
    // TODO:add activeClassName for when the link is selected
    return (
      <header>
        {loggedIn &&
          <div>
            <NavLink to="/" exact={true}>Dashboard</NavLink>
            <NavLink to="/rubric">Show Rubric</NavLink>
          </div>
        }
        {!loggedIn &&
          <div>
            <NavLink to="/login"> Login </NavLink>
            <NavLink to="/register"> Register </NavLink>
          </div>

        }

      </header>
    );
  }
}

export default Header;
