import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../actions/learningAction';
import { bindActionCreators } from 'redux';
import {SkyLightStateless} from 'react-skylight'
import axios from 'axios'
import serverPath from '../paths';
import { PulseLoader } from 'halogenium'

class ActionCreateModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      action: {
        url: '',
        customTitle: '',
        customType: '',
        customNote: '',
        creator: localStorage.getItem('userId'),
        meta: {}
      },
      fetching: false
    }
  }

  updateURL(e) {
    this.setState({
      ...this.state,
      action: {
        ...this.state.action,
        url: e.target.value
      }
    })
  }

  getOpenGraph() {
    this.setState({...this.state, fetching: true})
    axios.post(`${serverPath}/opengraph`, this.state.action)
    .then((response) => {
      const { data } = response
      console.log('DATA', data)
      this.setState({
        ...this.state,
        action: {
          ...this.state.action,
          ...data
        },
        fetching: false
      })
    })
  }

  render() {
    const { isVisible, toggle, criteria, learningAction, isFetching } = this.props
    const { action, fetching } = this.state
    const { url } = action
    const loader = fetching ? (<PulseLoader color="#E33872" size="16px" margin="4px"/>) : null
    return (
      <div>
        <SkyLightStateless
          isVisible={isVisible}
          onCloseClicked={() => {
            this.setState({
              action: {
                url: '',
                customTitle: '',
                customType: '',
                customNote: '',
                creator: localStorage.getItem('userId'),
                meta: {}
              },
              fetching: false
            })
            toggle()
          }}
          title="Got a useful learning resource?">
          <h3><small className="text-primary">Enter a resource that helps you learn...</small></h3>
          <h4><strong>&quot;{criteria.text}&quot;</strong></h4>
          <div className="form-group bmd-form-group">
            <input className="form-control" value={url} onChange={(e) => this.updateURL(e)} placeholder="(example... http://www.cooltutorials.com/tutorial/42 )" type="url" />
            <span className="form-control-feedback">
              <i className="material-icons">done</i>
            </span>
            <span className="bmd-help">Must be a valid url</span>
          </div>
          <button onClick={this.getOpenGraph.bind(this)} className="btn btn-default" type="button">Go!</button>
          {loader}
          <h6>{action.customTitle != '' ? action.customTitle : (action.meta.ogTitle ? action.meta.ogTitle : null)}</h6>
        </SkyLightStateless>
      </div>
    )
  }
}

ActionCreateModal.displayName = 'Message';

const mapStateToProps = (state) => {
  return {
    learningAction: state.learningAction.learningAction,
    isFetching: state.learningAction.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionCreateModal));
