import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const user = {
      username: localStorage.getItem('username'),
      userId: localStorage.getItem('userId'),
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      avatarURL: localStorage.getItem('avatarURL'),
    }

    return(
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        </div>
      </div>
    );
  }
}

export default Profile;
