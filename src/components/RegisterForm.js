import React, { Component } from 'react';
import '../styles/styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
              <TextField
                hintText="First name"
                floatingLabelText="First name"
                onChange={(event, newValue) => {
                  this.setState({firstName:newValue})
                }}
                />
                <TextField
                  hintText="Last name"
                  floatingLabelText="Last name"
                  onChange={(event, newValue) => {
                    this.setState({lastName:newValue})
                  }}
                  />
                <br />
                <TextField
                  hintText="Email"
                  type="email"
                  floatingLabelText="Email"
                  onChange={(event, newValue) => {
                    this.setState({lastName:newValue})
                  }}
                  />
                <br />
              <RaisedButton label="Submit" primary={true} onClick={(e) => {
                e.preventDefault();
                this.props.requestRegister(e, this.state);
                }
              } />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default RegisterForm;
