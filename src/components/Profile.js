import React, { Component } from 'react';

class Profile extends Component {

  render() {
    console.log('profile rendering')
    return(
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header card-header-icon" data-background-color="row">
              <i class="material-icons">perm_identity</i>
            </div>
            <div className="card-content">
              <h4 className="card-title"> Edit Profile - </h4>  <small class="category">Complete your profile</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
