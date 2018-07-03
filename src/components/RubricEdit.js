import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import * as Actions from '../actions/rubric';
import mixpanel from 'mixpanel-browser';
import Input from './Input';

class RubricEdit extends Component {

  state = {
    needsNewRubric: false,
  }
  // 1. Check to see if it is in 'edit' or 'new' mode
  // 2. Map state to props
  // 3. Render the component
  // 4. Update the model onChange (Bounce function?)

  componentWillMount() {
    const { createNewRubric, getRubricById } = this.props
    const { pathname } = this.props.location
    const { rubricId, userId } = this.props.match.params
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const newRubric = {
      name: `${firstName} ${lastName}\'s New Roadmap`
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

  render() {
    const { needsNewRubric } = this.state
    const { isFetching, rubric } = this.props
    const { name, id, userId, iconName, description, levelOne, levelTwo, levelThree, levelFour } = rubric
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    return (
      <div className="col-sm-9 col-md-7 col-lg-5">
        {this.redirect(isFetching, needsNewRubric, userId, id)}
        <button onClick={this.goBack.bind(this)} style={{padding: '0'}} className="btn btn-lg btn-info btn-round btn-simple">
            <i className="material-icons">arrow_back_ios</i> back
        </button>
        <div className="card">
          <div className="card-content">
            <i className="material-icons">add</i>
            <h4 className="card-title">What skillset does this roadmap assess/achieve?</h4>
            <Input text={ name === `${firstName} ${lastName}\'s New Roadmap` ? `` : name } placeholder="e.g. Code Review..." autoFocus={true}/>
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
