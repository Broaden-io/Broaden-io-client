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
    const { name, url, meta } = this.props.data
    console.log('META', meta)

    return(
      <div>
        <h4>{url}</h4>
        <ul>
          <li>{meta.data.ogTitle}</li>
        </ul>
      </div>
      )
    }
  }

  export default withRouter(connect()(Action))
