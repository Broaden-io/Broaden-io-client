import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavTop from './NavTop';
import Dashboard from './Dashboard';
import RubricsIndex from './RubricsIndex';
import Rubric from './Rubric';
import Footer from './Footer';

const MenuItem = props => {
  return (
    <li className={(props.active) ? `active` : ``}>
      <Link to={props.path}>
        <i className="material-icons">{props.icon}</i>
        <p> {props.title} </p>
      </Link>
    </li>
  )
}

class Sidebar extends Component {
  render() {

    return (
      <div className="wrapper">
        <div className="sidebar" data-active-color="rose" data-background-color="white" data-image="assets/img/sidebar-1.jpg">

          <div className="logo">
            <a href="" className="simple-text logo-mini">

            </a>
            <a href="" className="simple-text logo-normal">
              Trubric.io
            </a>
          </div>
          <div className="sidebar-wrapper">
            <div className="user">
              <div className="photo">
                <img alt="avatar" src={localStorage.getItem('avatarURL')} />
              </div>
              <div className="info">
                <a href="" className="">
                  <span>
                    {`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}
                    <b className="caret"></b>
                  </span>
                </a>
                <div className="clearfix"></div>
                <div className="collapse" id="collapseExample">
                  <ul className="nav">
                    <li>
                      <a href="">
                        <span className="sidebar-mini"> MP </span>
                        <span className="sidebar-normal"> My Profile </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="sidebar-mini"> EP </span>
                        <span className="sidebar-normal"> Edit Profile </span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="sidebar-mini"> S </span>
                        <span className="sidebar-normal"> Settings </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="nav">
              <MenuItem title="Dashboard" active={(this.props.location.pathname == `/${localStorage.getItem('username')}/dashboard`) || (this.props.location.pathname == `/${localStorage.getItem('username')}`)} icon="dashboard" path={`/${localStorage.getItem('username')}/dashboard`}/>
              <MenuItem title="Rubrics" active={this.props.location.pathname == `/${localStorage.getItem('username')}/rubrics`} icon="assessment" path={`/${localStorage.getItem('username')}/rubrics`} />
            </ul>
          </div>
        </div>
        <div className="main-panel">

          <NavTop />

          <div className="content">
            <div className="container-fluid">


                <Route path={`/:username/dashboard`} component={Dashboard} />
                <Route path={`/:username/rubrics`} component={RubricsIndex} />
                <Route path={`/rubrics/:id`} component={Rubric} />
              {/*<Route path={`/${localStorage.getItem('username')}`} render={() => <Dashboard />}/>
            <Route path={`/${localStorage.getItem('username')}/rubrics`} render={() => <RubricsIndex />}/>*/}
          </div>
        </div>
        <Footer />

      </div>
    </div>

  );
}
}

export default Sidebar;
