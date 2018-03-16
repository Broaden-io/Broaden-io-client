import React, { Component } from 'react';

class Profile extends Component {
  render() {
    username: localStorage.getItem('username');
    userId: localStorage.getItem('userId');
    email: localStorage.getItem('email');
    bio: localStorage.getItem('bio');
    firstName: localStorage.getItem('firstName');
    lastName: localStorage.getItem('lastName');
    avatarURL: localStorage.getItem('avatarURL');

    return(
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-content">
              <h4 className="card-title"> My Profile </h4>
              <hr />
              <div col-sm-6>
                <p> Username: <small> {username} </small> </p>
              </div>
              <div col-sm-6>
                <p> Email: <small> {email} </small> </p>
              </div>
              <div col-sm-6>
                <p> First Name: <small> {firstName !== 'null' ? user.firstName : <a className="text-info" href={`/${user.username}/edit`}> Click here to add a first name </a>} </small> </p>
              </div>
              <div col-sm-6>
                <p> Last Name: <small> {lastName !== 'null' ? user.lastName : <a className="text-info" href={`/${user.username}/edit`}> Click here to add a last name </a>} </small> </p>
              </div>
              <div col-sm-6>
                <p> Bio: <small> {bio !== 'null' ? user.bio : <a className="text-info" href={`/${user.username}/edit`}> Click here to add a bio </a>} </small> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
