import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as Actions from '../actions/auth';

class NavTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarIsMini: false
    }
  }

  render() {

    return (
      <nav className="navbar navbar-transparent navbar-absolute">
        <div className="container-fluid">
          {/*<div className="navbar-minimize">
            <button
            onClick={this.setState({sidebarIsMini: !this.state.sidebarIsMini})}
            id="minimizeSidebar"
            className="btn btn-round btn-white btn-fill btn-just-icon">
            <i className="material-icons visible-on-sidebar-regular">more_vert</i>
            <i className="material-icons visible-on-sidebar-mini">view_list</i>
            </button>
            </div>*/}

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

              <a className="navbar-brand" href="/">
                  &nbsp; TRUBRIC.IO
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                  <li className=" ">
                    <a href="" onClick={() => {
                      this.props.logoutUser();
                    }}>
                      <i className="material-icons">fingerprint</i> Logout
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href=""
                      onClick={() => {
                        this.props.logoutUser();
                      }}
                      className="dropdown-toggle"
                      data-toggle="dropdown-profile">
                      <i className="material-icons">person</i>
                      <p className="hidden-lg hidden-md">Profile</p>
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
                  <li className="separator hidden-lg hidden-md" />
                </ul>
              </div>
            </div>
          </nav>
        );
      }
    }
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavTop))
