import React, { Component } from 'react';
import axios from 'axios';
import mixpanel from 'mixpanel-browser';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      bio: '',
      firstName: '',
      lastName: ''
    }
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Edit Profile Page");
  }

  submitForm() {
    // go through items in the state and only send the ones that have been updated
    // make sure that the user can only submit an edit request for their OWN user account
  }

// Kash was here

  render() {
    const { username, email, bio, firstName, lastName } = this.state;
    return(
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header card-header-icon" data-background-color="rose">
              <i className="material-icons">perm_identity</i>
            </div>
            <div className="card-content">
              <h4 className="card-title">Edit Profile  -
                <small className="category">  Complete your profile</small>
              </h4>
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group label-floating is-empty">
                      <label className="control-label">Username</label>
                      <input type="text" className="form-control" value={username} onChange={(e) => this.setState({username: e.target.value})}/>
                    <span className="material-input"></span></div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group label-floating is-empty">
                      <label className="control-label">Email address</label>
                      <input type="email" className="form-control" value={email} onChange={(e) => this.setState({email: e.target.value})}/>
                    <span className="material-input"></span></div>
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label">First Name</label>
                        <input type="text" className="form-control" value={firstName} onChange={(e) => this.setState({firstName: e.target.value})}/>
                      <span className="material-input"></span></div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group label-floating is-empty">
                        <label className="control-label">Last Name</label>
                        <input type="text" className="form-control" value={lastName} onChange={(e) => this.setState({lastName: e.target.value})}/>
                      <span className="material-input"></span></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>About Me</label>
                        <div className="form-group label-floating is-empty">
                          <textarea className="form-control" rows="5" value={this.state.bio} onChange={(e) => this.setState({bio: e.target.value})} ></textarea>
                        <span className="material-input"></span></div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-rose pull-right">Update Profile</button>
                  <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default EditProfile;
