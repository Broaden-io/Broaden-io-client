import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import * as Actions from '../actions/rubric';
import mixpanel from 'mixpanel-browser';

class RubricEdit extends Component {

  // 1. Check to see if it is in 'edit' or 'new' mode
  // 2. Map state to props
  // 3. Render the component
  // 4. Update the model onChange (Bounce function?)

  componentWillMount() {
    const { createNewRubric, getRubricById } = this.props
    const { pathname } = this.props.location
    const { rubricId, userId } = this.props.match.params
    const username = localStorage.getItem('username')
    const newRubric = {
      name: `${username}\'s New Roadmap`
    }

    if (pathname.includes('/rubric/new')) {
      createNewRubric(userId, newRubric)
    } else {
      getRubricById(rubricId);
    }
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Rubrics Index Component Page");
  }

  render() {
    console.log("props", this.props)
    const { isFetching, rubric } = this.props
    const { name, iconName, description, levelOne, levelTwo, levelThree, levelFour } = rubric
    return (
      <div className="col-sm-9 col-md-7 col-lg-5">
        <h2>Roadmap</h2>

        <div className="card">
          <div className="card-content">
            <i className="material-icons">add</i>
            <h4 className="card-title">{name}</h4>

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
