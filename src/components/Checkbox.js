import React, { Component } from 'react';

class Checkbox extends Component {


state ={
  checked = true
}

  render() {

    return(
      <label>
        <input type="checkbox" name="optionsCheckboxes"/>
          <span class="checkbox-material">
            <span class="check"/>
          </span>
        {this.props.label}
      </label>

    );
  }
}

export default Input;
