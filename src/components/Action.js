import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import { Collapse } from 'react-collapse'
import { presets } from 'react-motion'

class Action extends Component {

  state = {
  
  }

  render() {
    const { name, url } = this.props.data
    return(
      <h4>{url}</h4>
      )
    }
  }

  export default withRouter(connect()(Action))
