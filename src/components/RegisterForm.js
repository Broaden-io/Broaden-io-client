import React, { Component } from 'react';
import '../styles/styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      avatarUrl: '',
      email: '',
      bio: '',
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <div>
          <TextField
            hintText="Username"
            floatingLabelText="Username"
            onChange={(event, newValue) => {
              this.setState({username:newValue})
            }}
            />
            <br />
            <TextField
              hintText="Password"
              type="password"
              floatingLabelText="Password"
              onChange={(event, newValue) => {
                this.setState({password:newValue})
              }}
              />
              <br />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterForm;
