import React, { Component } from 'react';

const username = localStorage.getItem('username');
const userId = localStorage.getItem('userId');
const email = localStorage.getItem('email');
const bio = localStorage.getItem('bio');
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const avatarURL = localStorage.getItem('avatarURL');

class Profile extends Component {
  render() {


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
                <p> First Name: <small> {firstName !== 'null' ? firstName : <a className="text-info" href={`/${username}/edit`}> Click here to add a first name </a>} </small> </p>
              </div>
              <div col-sm-6>
                <p> Last Name: <small> {lastName !== 'null' ? lastName : <a className="text-info" href={`/${username}/edit`}> Click here to add a last name </a>} </small> </p>
              </div>
              <div col-sm-6>
                <p> Bio: <small> {bio !== 'null' ? bio : <a className="text-info" href={`/${username}/edit`}> Click here to add a bio </a>} </small> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
