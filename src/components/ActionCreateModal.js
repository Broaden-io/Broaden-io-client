import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as Actions from '../actions/learningAction';
import { bindActionCreators } from 'redux';
import {SkyLightStateless} from 'react-skylight'
import axios from 'axios'
import serverPath from '../paths';
import { BeatLoader } from 'halogenium'
import uuidv1 from 'uuid/v1'
import TextareaAutosize from 'react-autosize-textarea';

class ActionCreateModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      action: {
        url: '',
        customTitle: '',
        customType: '',
        customNote: '',
        userId: parseInt(localStorage.getItem('userId'), 10),
        meta: {},
        criterionId: this.props.criterion.id
      },
      fetching: false,
      fetched: false
    }
    this.renderStep = this.renderStep.bind(this)
    this.submitLearningAction = this.submitLearningAction.bind(this)
  }

  renderType(type) {
    let option = { title: 'Website', icon: 'explore', }
    if (type) {
      if (type.startsWith('video')) {
        option = { title: 'Video', icon: 'ondemand_video'}
      } else if (type.startsWith('music')) {
        option = { title: 'Music', icon: 'music_note'}
      } else if (type.startsWith('article')) {
        option = { title: 'Article', icon: 'assignment'}
      } else if (type.startsWith('book')) {
        option = { title: 'Book', icon: 'book'}
      } else if (type.startsWith('profile')) {
        option = { title: 'Profile', icon: 'face'}
      }
    }
    return (
      <button type="button" rel="tooltip" data-placement="left" title={option.title} className="btn btn-sm btn-round btn-info" data-original-title={option.title}>
        <i className="material-icons">{option.icon}</i>
        &nbsp; {option.title}
      </button>
    )
  }
  //adding new methods for the learnigAction

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
        this.setState({
          ...this.state,
          action: {
            ...this.state.action,
            ...data
          },
          fetching: false,
          fetched: true
        })
      })
  }

  renderStep() {
    const { fetched, fetching, action } = this.state
    const { url } = action
    const identifier = uuidv1()
    if (fetched) {
      if (fetching) {
        return (
          <BeatLoader color="#E33872" size="16px" margin="4px"/>
        )
      } else {
        const image = action.meta.ogImage ? <img className="media-object" src={action.meta.ogImage.url} alt={action.meta.ogTitle ? action.meta.ogTitle : 'resource thumbnail'}/> : null
        return (
          <div>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group bmd-form-group">
                  <label htmlFor={`customTitle${identifier}`} className="bmd-label-floating">Give this Resource a Title</label>
                  <input type="text" value={action.customTitle !== '' ? action.customTitle : (action.meta.ogTitle ? action.meta.ogTitle : null)} className="form-control" id={`customTitle${identifier}`} />
                  <span className="form-control-feedback">
                    <i className="material-icons">done</i>
                  </span>
                </div>
                <div className="form-group bmd-form-group">
                  <label htmlFor={`customNote${identifier}`} className="bmd-label-floating">Add a note for this resource</label>
                  <TextareaAutosize rows="3" type="text" value={action.customNote !== '' ? action.customNote : (action.meta.ogDescription ? action.meta.ogDescription : null)} className="form-control" id={`customNote${identifier}`} />
                  <span className="form-control-feedback">
                    <i className="material-icons">done</i>
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <a href="" className="thumbnail">
                  {image}
                </a>
                <br/>
                {this.renderType(action.meta.ogType)}
              </div>
            </div>
            <button onClick={() => {
              this.setState({
                action: {
                  url: '',
                  customTitle: '',
                  customType: '',
                  customNote: '',
                  userId: localStorage.getItem('userId'),
                  meta: {}
                },
                fetching: false,
                fetched: false
              })}} className="btn btn-warning pull-left" type="button">
              <span className="btn-label">
                <i className="material-icons">replay</i>
              </span>
              &nbsp; Reset
              <div className="ripple-container"></div>
            </button>
            <button onClick={() => {this.submitLearningAction()}} className="btn btn-info pull-right" type="button">
              Save &nbsp;
              <span className="btn-label btn-label-right">
                <i className="material-icons">keyboard_arrow_right</i>
              </span>
              <div className="ripple-container"></div>
            </button>

          </div>
        )
      }
    } else {
      return (
        <div className="form-group bmd-form-group">
          <input className="form-control" value={url} onChange={(e) => this.updateURL(e)} placeholder="(example... http://www.cooltutorials.com/tutorial/42 )" type="url" />
          <span className="form-control-feedback">
            <i className="material-icons">done</i>
          </span>
          <span className="bmd-help">Must be a valid url</span>

          <button onClick={this.getOpenGraph.bind(this)} className="btn btn-info pull-right" type="button">Go!</button>
        </div>
      )
    }
  }

  submitLearningAction() {
    this.props.createLearningAction(this.state.action)
  }

  render() {
    var modalStyles = {
      top: '30%',
      overflowY: `scroll`,
      maxHeight: '90%'
    }
    const { isVisible, toggle, criterion } = this.props
    return (
      <div>
        <SkyLightStateless
          dialogStyles={modalStyles}
          isVisible={isVisible}
          closeOnEsc={true}
          hideOnOverlayClicked={true}
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
          }}>
          <div className="col-11">
            <h3>Got a useful learning resource?</h3>
            <h3><small className="text-primary">Enter a resource that helps you learn...</small></h3>
            <h4><strong className="text-info">&quot;{criterion.text}&quot;</strong></h4>
            <hr/>
            {this.renderStep()}
          </div>
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
