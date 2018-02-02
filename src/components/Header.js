import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    // TODO:add activeClassName for when the link is selected
    return (
      <header>
        <NavLink to="/"exact={true}>Dashboard</NavLink>
        <NavLink to="/rubric">Show Rubric</NavLink>
      </header>
    );
  }
}

export default Header;
