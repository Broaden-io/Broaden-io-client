import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert } from './Alert';
import * as Actions from '../actions/auth';
import bcrypt from 'bcryptjs';
import serverPath from '../paths';
import axios from 'axios';
import Footer from './Footer';
import mixpanel from 'mixpanel-browser';

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      registerForm: {
        username: "",
        email: ""
      },
      rawPassword: "",
      isHuman: false,
      isValid: false,
      submitted: false
    }
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Login Page");
  }

  validate() {
    if (this.state.registerForm.username.length > 4
      && this.state.isHuman
      && this.state.rawPassword.length > 4) {
        this.setState({
          isValid: true
        })
      } else {
        this.setState({
          isValid: false
        })
      }
    }

    submitForm() {
      if (this.state.isValid) {
        bcrypt.genSalt(11, (err, salt) => {
          bcrypt.hash(this.state.rawPassword, salt, (err, hash) => {
            const newUser = {...this.state.registerForm, password: hash}
            axios.post(`${serverPath}/signup`, newUser)
            .then(response => {
              if (response.status === 200) {
                this.props.loginUser({ username: newUser.username, password: this.state.rawPassword })
              } else {
                return Promise.reject('could not signup')
              }
            }).then(() => {
              if (!this.props.auth.isAuthenticated) {
                Alert('signupError');
              }
            }).catch(error => {
              Alert('signupError');
            })
          });
        });
      } else {
        Alert('signupError');
      }
    }


    render() {
      return (
        <div className="off-canvas-sidebar">
          <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
            <div className="container">
              <ToastContainer
                hideProgressBar={true}
                position={'top-center'}
                newestOnTop={true}
                autoClose={5000}
                />
              <div className="navbar-header">
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
                  <li className=" active ">
                    <a href="">
                      <i className="material-icons">person_add</i> Sign Up
                      </a>
                    </li>
                    <li className="">
                      <Link to='/login'>
                        <i className="material-icons">fingerprint</i> Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="wrapper wrapper-full-page">
                <div className="full-page register-page full-page-background" filter-color="info" data-image="/assets/img/login.jpg" style={{backgroundImage: `url(/assets/img/login.jpg)`, width: `100%`}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1">
                        <div className="card card-signup">
                          <h2 className="card-title text-center">Sign Up</h2>
                          <div className="row">
                            <div className="col-md-5 col-md-offset-1">
                              <div className="card-content">
                                <div className="info info-horizontal">
                                  <div className="icon icon-rose">
                                    <i className="material-icons">timeline</i>
                                  </div>
                                  <div className="description">
                                    <h4 className="info-title">Assess your abilities</h4>
                                    <p className="description">
                                      Use one of our many detailed Rubrics designed to provide you with actionable learning steps and growth.
                                    </p>
                                  </div>
                                </div>
                                <div className="info info-horizontal">
                                  <div className="icon icon-primary">
                                    <i className="material-icons">lightbulb_outline</i>
                                  </div>
                                  <div className="description">
                                    <h4 className="info-title">Level-up your learning</h4>
                                    <p className="description">
                                      Our rubrics are rich with a diverse set of learning resources so you can level up your abilities quickly.
                                    </p>
                                  </div>
                                </div>
                                <div className="info info-horizontal">
                                  <div className="icon icon-info">
                                    <i className="material-icons">group</i>
                                  </div>
                                  <div className="description">
                                    <h4 className="info-title">Build your own curricula</h4>
                                    <p className="description">
                                      Develop your own personal rubrics for others to self-assess and grow your curriculum!
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="social text-center">
                                <Link to="/login" className="btn btn-info btn-round" >
                                  <i className="material-icons">account_circle</i>  Log In
                                    <div className="ripple-container"></div></Link>
                                  </div>
                                  <div className="card-content">
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <i className="material-icons">face</i>
                                      </span>
                                      <input type="text" value={this.state.registerForm.username} onChange={(e) => {
                                          this.setState({...this.state, registerForm: {...this.state.registerForm, username: e.target.value}}, () => {
                                            this.validate();
                                          })
                                        }} className="form-control" placeholder="Username..."/>
                                      </div>
                                      <div className="input-group">
                                        <span className="input-group-addon">
                                          <i className="material-icons">email</i>
                                        </span>
                                        <input type="text" value={this.state.registerForm.email} onChange={(e) => {
                                            this.setState({...this.state, registerForm: {...this.state.registerForm, email: e.target.value}}, () => {
                                              this.validate()
                                            })
                                          }} className="form-control" placeholder="Email..."/>
                                        </div>
                                        <div className="input-group">
                                          <span className="input-group-addon">
                                            <i className="material-icons">lock_outline</i>
                                          </span>
                                          <input type="password" value={this.state.rawPassword} onChange={(e) => {
                                              this.setState({...this.state, rawPassword: e.target.value}, () => {
                                                this.validate();
                                              })
                                            }} placeholder="Password..." className="form-control" />
                                          </div>
                                          {/*<!-- If you want to add a checkbox to this form, uncomment this code -->*/}
                                          <div className="checkbox">
                                            <label>
                                              <input type="checkbox" name="optionsCheckboxes" checked={this.state.isHuman} onChange={(e) => {
                                                  this.setState({...this.state, isHuman: !this.state.isHuman}, () => {
                                                    this.validate();
                                                  })
                                                }}/> I am not a robot!
                                              </label>
                                            </div>
                                          </div>

                                          <div className="footer text-center">
                                            {/*<button className="btn btn-info btn-round" onClick={() => this.setState({ submitted: true })}>Get Started...</button>
                                          <SweetAlert
                                          show={this.state.submitted}
                                          title="Awesome"
                                          text="Your account has been created successfully!"
                                          onConfirm={() => this.setState({ submitted: false })}
                                          />*/}
                                          <button className="btn btn-info btn-round btn-lg" onClick={this.submitForm}>Get Started...</button>


                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Footer />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
