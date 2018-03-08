import React, { Component } from 'react';

class Checkbox extends Component {

  state = {
    checked: this.props.beChecked ? true : false
  }

  checkboxChange = (e) => {
    if (this.state.checked) {
      this.setState({
        checked: false
      }, this.completeAction());

    } else {
      this.setState({
        checked: true
      }, this.completeAction());
    }
  }

  completeAction = (e) => {
    //When this is called, state.checked wouldn't have been set yet, so we must
    //do the opposite
    if (this.props.hasActions) {
      e.preventDefault();
      if (!this.state.checked) {
        this.props.positiveAction();
      } else {
        this.props.negativeAction();
      }
    }
  }

  render() {

    return(
      <label>
        <input type="checkbox" checked={this.state.checked} name="optionsCheckboxes" onClick={this.checkboxChange}/>
          <span className="checkbox-material">
            <span className="check"/>
          </span>
       {this.props.label}
      </label>

    );
  }
}

export default Checkbox;
