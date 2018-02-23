import React, { Component } from 'react';

// Here's a code Snippet of how to contruct this component in HTML: -->
// <Input name="email" type="email" label="Email Address" required={true}
// errorMessage="Bad email address"validation="/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/" />

class Input extends Component {

  //Should consider decomposing props objects into multiple variables so we dont
  //have to call this.props.* when using prop variables

  state = {
    inputText: "",
    validated: true
  }

  setInputText = (e) => {
    e.preventDefault();
    this.setState({
      inputText: e.target.value
    }, this.validate())
  }

  validate = () => {
    if (this.props.validation) {
      const regex = new RegExp(this.props.validation)
      if (regex.test(this.state.inputText)){
        this.setState({
          validated: true
        })
      } else {
        this.setState({
          validated: false
        })
      }
    }
  }


  drawErrorMessage = () => {
    if (this.props.errorMessage) {
      return this.props.errorMessage
    } else {
      return "Invalid input"
    }
  }

  render() {

    return(
      <div className="form-group label-floating is-empty">
        <div className="form-control-feedback">{this.state.validated ? "" : this.drawErrorMessage()}</div>
        <label className="control-label">
          {this.props.label}
          <small>
            {this.props.required ? "*" : ""}
          </small>
        </label>
          <input className="form-control" name={this.props.name} type={this.props.type}
          required={this.props.required} aria-required={this.props.required}
          onChange={this.setInputText} value={this.state.inputText}/>
          <span className="material-input"></span>
      </div>

    );
  }
}

export default Input;
