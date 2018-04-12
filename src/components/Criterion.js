import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import { Collapse } from 'react-collapse'
import { presets } from 'react-motion'

class Criterion extends Component {
  state = {
    isOpen: false
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const { id, text, level, answer, Actions: actions } = this.props.data
    const { isOpen } = this.state
    return(
      <ul className="list-group">
        <li className="list-group-item">
          <div onClick={this.toggle.bind(this)}>
            <span className="btn btn-info btn-sm btn-round pull-right">
              <strong>
                {level === 1 ? `${level} pt` : `${level} pts`}
              </strong>
            </span>
            <div className="checkbox" style={{display: `inline`}}>
              <label style={{display: `inline`}}>
                <input type="checkbox" name="optionsCheckboxes" style={{display: `inline`}}/>
              </label>
            </div>
            <h3 className="list-group-item-heading" style={{display: `inline`}}>&nbsp; <small>{text}</small></h3>
          <br/>
          <button className="btn btn-sm btn-primary btn-simple">
                              <i className="material-icons">add</i>
                              &nbsp; See learning actions to level up this skill
                          <div className="ripple-container"></div></button>          </div>
          <Collapse isOpened={isOpen} springConfig={{stiffness: 170, damping: 26}}>
              <button className="btn btn-default btn-block">Add a new resource</button>
          </Collapse>
        </li>
      </ul>
    )
  }
}

export default withRouter(connect()(Criterion))
