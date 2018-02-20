import React, { Component } from 'react';

class Input extends Component {

  const { label, required, name, type } = this.props;

  state = {
    inputText: "",
    validated: true
  }

  setInputText = (e) => {
    e.preventDefault();
    this.setState({
      inputText: e.target.value
    }, this.checkValidation())
  }

  checkValidation = () => {
    // console.log("checking validation")
    // console.log(this.props.validation)
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

    return(
      <div className="form-group label-floating is-empty">
          <label className="control-label">{label}<small>{required ? "*" : ""}</small></label>
          <input className="form-control" name={name} type={type}
          required={required} aria-required={required}
          onChange={this.setInputText} value={this.state.inputText}
          />
          <span className="material-input"></span>
      </div>

    );
  }
}

export default Input;
