import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import serverPath from '../paths';

class EditProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: localStorage.getItem('userId'),
      username: '',
      email: '',
      bio: '',
      firstName: '',
      lastName: ''
    }

    let config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }

    const user = fetch(`${serverPath}/users/${this.state.id}`, config).then((res) => {
      if (res.status !== 200) {
        return Promise.reject("Could not get user info");
      }
      return res.json();
    }).then((json) => {
      this.setState({
        username: json.username,
        email: json.email,
        bio: json.bio,
        firstName: json.firstName,
        lastName: json.lastName
      })
    }).catch(err => {
      console.log("Error: " + err)
    });
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Edit Profile Page");
  }

  submitForm(e) {
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
              <form onSubmit={this.submitForm.bind(this)}>
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
                        <textarea className="form-control" rows="5" value={bio} onChange={(e) => this.setState({bio: e.target.value})} ></textarea>
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
