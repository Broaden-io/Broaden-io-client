import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="">Material Dashboard Pro</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="">
                            <i className="material-icons">dashboard</i> Dashboard
                        </a>
                    </li>
                    <li className="">
                        <a href="">
                            <i className="material-icons">person_add</i> Register
                        </a>
                    </li>
                    <li className=" active ">
                        <a href="">
                            <i className="material-icons">fingerprint</i> Login
                        </a>
                    </li>
                    <li className="">
                        <a href="">
                            <i className="material-icons">lock_open</i> Lock
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Navbar;
