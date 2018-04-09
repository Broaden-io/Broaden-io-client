import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/auth';
import NavTop from './NavTop';
import Dashboard from './Dashboard';
import RubricsIndex from './RubricsIndex';
import Rubric from './Rubric';
import Footer from './Footer';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Learning from './Learning';

const MenuItem = withRouter(
  (props) => {
    return (
      <li className={(props.active) ? `active` : ``}>
        <Link to={props.path}>
          <i className="material-icons">{props.icon}</i>
          <p> {props.title} </p>
        </Link>
      </li>
    )
  }
)

class Sidebar extends Component {

  render() {

    const user = {
      username: localStorage.getItem('username'),
      userId: localStorage.getItem('userId'),
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      avatarURL: localStorage.getItem('avatarURL'),
    }

    const renderedUserName = ((user.firstName === 'null') || (user.lastName === 'null')) ? user.username : `${user.firstName} ${user.lastName}`;

    return (
      <div className="wrapper">
        <div className="sidebar" data-active-color="rose" data-background-color="white" data-image="/assets/img/sidebar-1.jpg">
          <div className="logo">
            <a href="" className="simple-text logo-mini">
              <i className="material-icons">details</i>
            </a>
            <a href="/dashboard" className="simple-text logo-normal">
              Broaden.io
            </a>
          </div>
          <div className="sidebar-wrapper">
            <div className="user">
              <div className="photo">
                <img alt="avatar" src={user.avatarURL} />
              </div>
              <div className="info">
                <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                  <span>
                    {renderedUserName}
                    <b className="caret"></b>
                  </span>
                </a>
                <div className="clearfix"></div>
                <div className="collapse" id="collapseExample">
                  <ul className="nav">
                    <li>
                      <Link to={`/${user.username}`}>
                        <span className="sidebar-mini"> <i className="material-icons">person</i> </span>
                        <span className="sidebar-normal"> My Profile </span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${user.username}/edit`}>
                        <span className="sidebar-mini"> <i className="material-icons">settings</i> </span>
                        <span className="sidebar-normal"> Edit Profile </span>
                      </Link>
                    </li>
                    <li>
                      <a href="" onClick={() => {
                          this.props.logoutUser();
                        }}>
                        <span className="sidebar-mini"> <i className="material-icons">fingerprint</i> </span>
                        <span className="sidebar-normal"> Logout </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="nav">
              <MenuItem
                title="Dashboard"
                active={(this.props.location.pathname === `/${user.username}/dashboard`) || (this.props.location.pathname === `/dashboard`)}
                icon="dashboard"
                path={`/dashboard`}/>
              <MenuItem
                title="Rubrics"
                active={this.props.location.pathname === `/rubrics`}
                icon="assessment"
                path={`/rubrics`} />
              <MenuItem
                title="Learning Mode"
                active={this.props.location.pathname === `/learn`}
                icon="check_circle"
                path={`/learn`} />
            </ul>
          </div>
        </div>
        <div className="main-panel">
          <NavTop />
          <div className="content">
            <div className="container-fluid">
              <Switch>
                <Route path={`/dashboard`} component={Dashboard} />
                <Route exact={true} path={`/rubrics`} component={RubricsIndex} />
                <Route path={`/rubrics/:id`} component={Rubric} />
                <Route path={`/learn`} component={Learning} exact={true} />
                <Route path={`/learn/:id`} component={Learning} />
                <Route path={`/:username`} component={Profile} exact={true} />
                <Route path={`/:username/edit`} component={EditProfile} exact={true} />
              </Switch>
            </div>
          </div>
          <Footer />

        </div>
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar))
