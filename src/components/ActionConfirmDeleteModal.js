import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../actions/learningAction'
import { bindActionCreators } from 'redux'
import {SkyLightStateless} from 'react-skylight'

class ActionConfirmDeleteModal extends React.Component {

  render() {
    const { isVisible, toggle, action } = this.props
    const { id: actionId, meta, customTitle } = action
    const { ogTitle: title } = meta
    return (
      <div>
        <SkyLightStateless
          isVisible={isVisible}
          onCloseClicked={toggle}
          title="Are you sure you want to delete?"
        >
          <hr/>
          <h4>Delete the learning resource <strong>{(customTitle === '') ? title : customTitle}</strong>?</h4>
          <div className="col-4">
            <button onClick={toggle} className="btn btn-default btn-lg pull-left" type="button">
              <span className="btn-label">
                <i className="material-icons">replay</i>
              </span>
              &nbsp; Cancel
              <div className="ripple-container"></div>
            </button>
          </div>
          <div className="col-4">
            <button onClick={() => {this.props.deleteLearningAction(actionId)}} className="btn btn-danger btn-lg pull-right" type="button">
              Delete &nbsp;
              <span className="btn-label btn-label-right">
                <i className="material-icons">keyboard_arrow_right</i>
              </span>
              <div className="ripple-container"></div>
            </button>
          </div>
        </SkyLightStateless>
      </div>
    )
  }
}

ActionConfirmDeleteModal.displayName = 'Message';

const mapStateToProps = (state) => {
  return {
    learningAction: state.learningAction.learningAction,
    isFetching: state.learningAction.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionConfirmDeleteModal));
