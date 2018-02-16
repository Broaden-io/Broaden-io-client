import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serverPath from '../paths';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

class Login extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props)
    this.sendSweetAlert = this.sendSweetAlert.bind(this)
    this.setTokenCookie = this.setTokenCookie.bind(this)
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

  componentWillMount() {
    const { cookies } = this.props;
  }

  setTokenCookie(token) {
    const { cookies } = this.props;
    cookies.set('RubricsApp', token, { path: '/'} );
    console.log(cookies.get('RubricsApp'));
  }

  refresh() {
    this.setState({loaded: true})
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.refresh()
    }
  }

  submitForm() {
    axios.post(`${serverPath}/login`, this.state.loginForm)
    .then(response => {
      console.log("Here is the Response...",response)
      if (response.status === 200) {
        const user = response.data.user
        console.log(response.data)
        {this.setTokenCookie(response.data.token)}
        this.props.history.push("/");
      }
    })
    .catch(error => {
      console.log('error!', error)
    })
  }

  sendSweetAlert() {
    const options = { title:"Good job!", text: "You clicked the button!", type: "success", buttonsStyling: true, confirmButtonClass: "btn btn-success"}
    this.submitButton.swal(options)
  }



  render() {
    return (
      <div className="off-canvas-sidebar">
        {console.log(this.state)}
        <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="">RubricPRO</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">
                    <i className="material-icons">dashboard</i> Dashboard
                    </Link>
                  </li>
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
                </div>
              </nav>
              <div className="wrapper wrapper-full-page">
                <div className="full-page login-page" filter-color="blue" data-image="assets/img/login.jpeg">
                  <div className="content">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                          <form method="#" action="#">
                            <div className="card card-login">
                              <div className="card-header text-center" data-background-color="blue">
                                <h4 className="card-title">Login</h4>

                                {/*<div className="social-line">
                                  <a href="#btn" className="btn btn-just-icon btn-simple">
                                  <i className="fa fa-facebook-square"></i>
                                  </a>
                                  <a href="#pablo" className="btn btn-just-icon btn-simple">
                                  <i className="fa fa-twitter"></i>
                                  </a>
                                  <a href="#eugen" className="btn btn-just-icon btn-simple">
                                  <i className="fa fa-google-plus"></i>
                                  </a>
                                  </div>*/}
                                </div>
                                <p className="category text-center">Don't have an account?</p>
                                <p className="category text-center">
                                  <Link className="btn btn-info btn-round" to='/signup'> Sign Up</Link>
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
                                <div className="footer text-center">
                                  <button onClick={this.submitForm} className="btn btn-rose btn-simple btn-wd btn-lg">Let's go</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer className="footer">
                      <div className="container">
                        {/*<nav className="pull-left">
                          <ul>
                          <li>
                          <a href="#">
                          Home
                          </a>
                          </li>
                          <li>
                          <a href="#">
                          Company
                          </a>
                          </li>
                          <li>
                          <a href="#">
                          Portofolio
                          </a>
                          </li>
                          <li>
                          <a href="#">
                          Blog
                          </a>
                          </li>
                          </ul>
                          </nav>*/}
                          <p className="copyright pull-right">
                            &copy;

                            {/*{`${(document.write(new Date().getFullYear()))}`}*/}

                            <a href="http://www.creative-tim.com"> RubricPRO </a>, made with love to better education
                            </p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </div>
                );
              }
            }

            export default withCookies(Login);
