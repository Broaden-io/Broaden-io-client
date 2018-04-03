import * as Actions from '../actions/assessments';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import ScoreCard from './ScoreCard'
import mixpanel from 'mixpanel-browser'
import "../assets/css/material-dashboard-react.css";
import uuidv1 from 'uuid/v1';

const AddAssessmentButton = (props => {
  return (
    <div className="col-md-4">
      <div className="col-6">
        <Link className="btn btn-lg btn-block btn-border btn-default"
          to={props.link} style={{ color: '#888', backgroundColor: 'rgba(0,0,0,.05)'}}>
          <i className="material-icons" style={{fontSize: 60}}>add
          </i>
           Take a new assessment
           <div className="ripple-container">
          </div>
        </Link>
      </div>
    </div>
  )
})
class Dashboard extends Component {

  componentWillMount() {
    const userId = localStorage.getItem('userId')
    this.props.getAssessments(userId)
  }

componentDidMount() {
  mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
  mixpanel.track("Dashboard Page");
}

  render() {
    const { assessmentsObject, isFetching } = this.props.assessments
    return (
      <div>
        <div className="row">
          {isFetching ? null : assessmentsObject.map((assessment, index)=>{
            return <ScoreCard key={uuidv1()} assessment={assessment}/>
          })}
          <AddAssessmentButton link={`/rubrics`}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assessments: state.assessments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
