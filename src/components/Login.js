import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import * as Actions from '../actions/auth';
import { Alert } from './Alert';

import mixpanel from 'mixpanel-browser'
class Login extends Component {

  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)

    this.state = {
      loginForm: {
        username: "",
        password: ""
      },
      isHuman: false,
      isValid: false,
      submitted: false,
      loaded: false
    }
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Login Page");
  }

  submitForm(e) {
    e.preventDefault();
    this.props.loginUser(this.state.loginForm).then(() => {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push(`/dashboard`);
      } else {
        console.log("Failed to log in!")
        Alert('loginError')
      }
    });
  }

  render() {
    return (
      <div className="off-canvas-sidebar">
        <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
          <div className="container">
            <ToastContainer
              hideProgressBar={false}
              position={'top-center'}
              newestOnTop={true}
              autoClose={5000}
            />
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">
                <i className="material-icons">details</i>
                &nbsp; BROADEN.IO
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="">
                  <Link to="/signup">
                    <i className="material-icons">person_add</i> Sign Up
                    </Link>
                  </li>
                  <li className=" active ">
                    <Link to="/login">
                      <i className="material-icons">fingerprint</i> Login
                      </Link>
                    </li>
                  </ul>
                </div>
            </nav>
            <div className="wrapper wrapper-full-page">
              <div className="full-page login-page full-page-background" filter-color="blue" data-image="/assets/img/spacex.jpg" style={{backgroundImage: `url(/assets/img/spacex.jpg)`, width: `100%`}}>
                <div class="sidebar-background" />

                <div className="content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                        <form>
                          <div className="card card-login">
                            <div className="card-header text-center" data-background-color="blue">
                              <h4 className="card-title">Login</h4>
                            </div>
                            <p className="category text-center">Don &#39; t have an account?</p>
                            <p className="category text-center">
                              <Link className="btn btn-rose btn-simple" to='/signup'> Sign Up</Link>
                            </p>
                            <div className="card-content">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">face</i>
                                </span>
                                <div className="form-group label-floating">
                                  <label className="control-label">username</label>
                                  <input type="text" value={this.state.loginForm.username} onChange={(e) => this.setState({loginForm: {...this.state.loginForm, username: e.target.value}})} className="form-control" />
                                </div>
                              </div>

                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="material-icons">lock_outline</i>
                                </span>
                                <div className="form-group label-floating">
                                  <label className="control-label">Password</label>
                                  <input type="password" value={this.state.loginForm.password} onChange={(e) => this.setState({loginForm: {...this.state.loginForm, password: e.target.value}})} className="form-control" />
                                </div>
                              </div>
                            </div>
                            <div className="footer text-center loading-icon" >
                              {
                                this.props.auth.isFetching
                                ? <ReactLoading type={"spin"} height={20} width={20} color="#0000ff"/>
                                : <button onClick={this.submitForm} className="btn btn-info btn-round btn-wd btn-lg">
                                    Let &#39; s go
                                  </button>
                              }
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="footer">
                  <div className="container">
                    <p className="copyright pull-right">
                      &copy;

                      {/*{`${(document.write(new Date().getFullYear()))}`}*/}

                      <a href="/"> BROADEN.io </a>, made with love to better education
                      </p>
                    </div>
                  </footer>
                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
