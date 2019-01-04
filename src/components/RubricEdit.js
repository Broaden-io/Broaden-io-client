import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import * as Actions from '../actions/rubric';
import mixpanel from 'mixpanel-browser';
import Input from './Input';

class RubricEdit extends Component {

  state = {
    needsNewRubric: false,
    nameInput: "",
  }
  // 1. Check to see if it is in 'edit' or 'new' mode
  // 2. Map state to props
  // 3. Render the component
  // 4. Update the model onChange (Debounce function?)

  componentWillMount() {
    const { createNewRubric, getRubricById } = this.props
    const { pathname } = this.props.location
    const { rubricId, userId } = this.props.match.params
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const newRubric = {
      name: `${firstName} ${lastName}'s New Roadmap`
    }

    if (pathname.includes('rubric/new')) {
      this.setState({needsNewRubric: true})
      createNewRubric(userId, newRubric)
    } else {
      getRubricById(rubricId);
    }
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Rubrics Index Component Page");
  }

  redirect(isFetching, needsNewRubric, userId, id) {
    if (!isFetching && needsNewRubric) {
      return <Redirect from={`/users/${userId}/rubric/new`} to={`/users/${userId}/rubrics/${id}`} />
    }
  }

  goBack() {
    this.props.history.goBack()
  }

  updateNameInput(e) {
    e.preventDefault();
    this.props.updateNameInput(e.target.value);
  }

  render() {
    const { needsNewRubric } = this.state
    const { isFetching, rubric } = this.props
    const { name, id, userId, iconName, iconColor, description, levelOne, levelTwo, levelThree, levelFour } = rubric
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    return (
      <div className="col-sm-10 col-md-9 col-lg-8">
        {this.redirect(isFetching, needsNewRubric, userId, id)}
        <button onClick={this.goBack.bind(this)} style={{padding: '0'}} className="btn btn-lg btn-info btn-round btn-simple">
          <i className="material-icons">arrow_back_ios</i> back
        </button>
        <div className="card">
          <div className="card-header card-header-icon" data-background-color={iconColor}>
            <i className="material-icons">{iconName}</i>
          </div>
          <div className="card-content">
            <h2 className={`card-title text-${iconColor}`}><small>Edit <b>{name}</b> Roadmap...</small></h2>
            <div className="form-horizontal">


              <h4>What skillset does this roadmap assess/achieve?</h4>
              <div className="row">
                <label className="col-sm-2 label-on-left">Name (Title)</label>
                <div className="col-sm-10">
                  <div className="form-group label-floating is-empty">
                    <Input onChange={this.updateNameInput.bind(this)} text={ name === `${firstName} ${lastName}'s New Roadmap` ? `` : name } placeholder="e.g. Code Review..." autoFocus={true}/>
                    <span className="help-block">What skillset does this roadmap assess/achieve?</span>
                  </div>
                </div>
              </div>
              <div>&nbsp;</div>

              <h4>How would you describe this roadmap in more detail?</h4>
              <div className="row">
                <label className="col-sm-2 label-on-left">Description</label>
                <div className="col-sm-10">
                  <div className="form-group label-floating is-empty">
                    <textarea className="form-control text-info" onChange={e => {e.preventDefault(); console.log(e.target.value);}} rows="5" text={description} placeholder={`e.g. "A comprehensive roadmap for getting a job as a data scientist. I made this roadmap because..."`}></textarea>
                    <span className="help-block">Enter any detailed information about you'd like to share about this roadmap.  What inspired you to make it?  Why are you're qualified to make it?  What a person could expect to achieve by completing it?</span>
                  </div>
                </div>
              </div>
              <div>&nbsp;</div>

              <h4 className="text-default">Describe the 4 different levels of skill for <b>{name}</b></h4>
              <div className="row">
                <label className="col-sm-2 label-on-left">Level 1</label>
                <div className="col-sm-10">
                  <div className="form-group label-floating is-empty">
                    <Input onChange={this.updateNameInput.bind(this)} text={levelOne} placeholder="e.g. Unsatisfactory, Beginner, Initial..." />
                    <span className="help-block">How would you describe the initial level of mastery of your Roadmap?</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <label className="col-sm-2 label-on-left">Level 2</label>
                <div className="col-sm-10">
                  <div className="form-group label-floating is-empty">
                    <Input onChange={this.updateNameInput.bind(this)} text={levelTwo} placeholder="e.g. Competant, Intermediate, Approaching..." />
                    <span className="help-block">How would you describe the second level of mastery of your Roadmap?</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <label className="col-sm-2 label-on-left">Level 3</label>
                <div className="col-sm-10">
                  <div className="form-group label-floating is-empty">
                    <Input onChange={this.updateNameInput.bind(this)} text={levelThree} placeholder="e.g. Proficient, Advanced, Overtaking..." />
                    <span className="help-block">How would you describe the third level of mastery of your Roadmap?</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <label className="col-sm-2 label-on-left">Level 4</label>
                <div className="col-sm-10">
                  <div className="form-group label-floating is-empty">
                    <Input onChange={this.updateNameInput.bind(this)} text={levelFour} placeholder="e.g. Professional, Expert, Innovating..." />
                    <span className="help-block">How would you describe the last level of mastery of your Roadmap?</span>
                  </div>
                </div>
              </div>
              <div>&nbsp;</div>



            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    ...state.rubric,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RubricEdit));
