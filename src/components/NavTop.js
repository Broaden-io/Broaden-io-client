import React, { Component } from 'react';

class NavTop extends Component {
  render() {
    // TODO:add activeClassName for when the link is selected
    return (
      <nav className="navbar navbar-transparent navbar-absolute">
        <div className="container-fluid">
          <div className="navbar-minimize">
            <button
              id="minimizeSidebar"
              className="btn btn-round btn-white btn-fill btn-just-icon">
              <i className="material-icons visible-on-sidebar-regular">more_vert</i>
              <i className="material-icons visible-on-sidebar-mini">view_list</i>
            </button>
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              >
              <span className="sr-only">
                Toggle navigation
              </span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href=""> Dashboard </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#pablo"
                  className="dropdown-toggle"
                  data-toggle="dropdown">
                  <i className="material-icons">dashboard</i>
                  <p className="hidden-lg hidden-md">Dashboard</p>
                </a>
              </li>
              <li className="dropdown">
                <a
                  href=""
                  className="dropdown-toggle"
                  data-toggle="dropdown">
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>
                  <p className="hidden-lg hidden-md">
                    Notifications
                    <b className="caret" />
                  </p>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="">
                      Mike John responded to your email
                    </a>
                  </li>
                  <li>
                    <a href="">
                      You have 5 new tasks
                    </a>
                  </li>
                  <li>
                    <a href="">
                      You're now friend with Andrew
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Another Notification
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Another One
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href=""
                  className="dropdown-toggle"
                  data-toggle="dropdown">
                  <i className="material-icons">person</i>
                  <p className="hidden-lg hidden-md">Profile</p>
                </a>
              </li>
              <li className="separator hidden-lg hidden-md" />
            </ul>
            <form
              className="navbar-form navbar-right"
              role="search">
              <div className="form-group form-search is-empty">
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Search " />
                <span className="material-input" />
              </div>
              <button
                type="submit"
                className="btn btn-white btn-round btn-just-icon">
                <i className="material-icons">search</i>
                <div className="ripple-container" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavTop;
