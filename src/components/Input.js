import React, { Component } from 'react';

// Example:
// <Input name="email" type="email" label="Email Address"
// required={true} validation="/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/" />

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      validated: true
    }
    this.setInputText = this.setInputText.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
  }

  setInputText(e) {
    e.preventDefault();
    console.log(this.state.inputText)
    this.setState({
      inputText: e.target.value
    }, () => {
      this.checkValidation();
    })
  }

  checkValidation() {
    console.log("checking validation")
    console.log(this.props.validation)
    // TODO
    // if (!this.props.validation) {
    //   return;
    // }
    // // if (this.state.validation doesn't match this.state.inputText regex):
    // // set validation STYLE == false (ex. red text)
    // switch (this.props.type) {
    //   case 'email':
    //     // check regex
    //     // if it passes,
    //     // set this.state({ validated: true})
    //     // otherwise: set this.state({validated: false })
    //     break;
    //   case 'username':
    //     break;
    //   default:
    //     break;
    // }
  }

  render() {
    let asterisk = "";
    if (this.props.required) {
      asterisk = "*";
    }

    return(
      <div className="form-group label-floating is-empty">
          <label className="control-label">{this.props.label}<small>{asterisk}</small></label>
          <input className="form-control" name={this.props.name} type={this.props.type}
          required={this.props.required} aria-required={this.props.required}
          onChange={this.setInputText} value={this.state.inputText}
          />
          <span className="material-input"></span>
      </div>

    );
  }
}

export default Input;
