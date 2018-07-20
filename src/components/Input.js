import React, { Component } from 'react'

// Here's a code Snippet of how to contruct this component in HTML: -->
// <Input name="email" type="email" label="Email Address" required={true}
// errorMessage="Bad email address"validation="/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/" />
export class Input extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.drawInputForm = this.drawInputForm.bind(this)
  }

  drawLabel() {
    if (this.props.label){
      return (
        <label className="control-label">
          {this.props.label}
        </label>
      )
    }
  }

  drawErrorMessage() {
    if (this.props.errorMessage) {
      return (<div >{this.props.errorMessage}</div>)
    } else {
      return <div >Invalid input</div>
    }
  }

  drawInputForm(valid) {
    {/*console.log("Text:",this.props.text)
    console.log("Cond:", !(this.props.text === null || this.props.text === ""))*/}
    if (valid === true){
      return (
        <div className={(this.props.label) ? `form-group label-floating has-success` : `form-group has-success`}>
          {this.drawLabel()}
          <input
            onChange={(e) => this.props.onChange(e.target.value)}
            type={(this.props.type) ? this.props.type : `text`}
            className="form-control form-control-success"
            placeholder={this.props.placeholder}
            value={this.props.text}
            disabled={(this.props.type === 'disabled') ? true : false} />
        </div>
      )
    } else if (valid === false && ((this.props.text === null || this.props.text === "") === false)) {
      return (
        <div className={(this.props.label) ? `form-group label-floating has-danger` : `form-group has-danger`}>
          {this.drawLabel()}
          <input
            onChange={(e) => this.props.onChange(e.target.value)}
            type={(this.props.type) ? this.props.type : `text`}
            className="form-control form-control-danger"
            placeholder={this.props.placeholder}
            value={this.props.text}
            disabled={(this.props.type === 'disabled') ? true : false} />
          {this.drawErrorMessage()}
        </div>
      )
    } else {
      return (
        <div className={(this.props.label) ? `form-group label-floating` : `form-group`}>
          {this.drawLabel()}
          <input
            onChange={(e) => this.props.onChange(e.target.value)}
            type={(this.props.type) ? this.props.type : `text`}
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.text} />
        </div>
      )
    }
  }

  validate() {
    const regex = new RegExp(this.props.validation)
    return regex.test(this.props.text)
  }

  render() {
    const valid = (this.props.validation != null) ? this.validate() : null
    {/*console.log("Valid:", valid)*/}
    return (
      <div>
        {this.drawInputForm(valid)}
      </div>
    )
  }
}

export default Input
