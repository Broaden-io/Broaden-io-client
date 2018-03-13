import * as Actions from '../actions/assessments';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import ChartCard from './ChartCard'
import ScoreCard from './ScoreCard'
import ChartistGraph from "react-chartist";
import {
  emailsSubscriptionChart,
  completedTasksChart
} from "../variables/charts";
import { AccessTime } from "material-ui-icons";
import "../assets/css/material-dashboard-react.css";
import uuidv1 from 'uuid/v1';

var Chartist = require("chartist");

const AddAssessmentButton = (props => {
  return (
    <div className="col-md-4" style={{paddingTop: 40}}>
      <Link className="btn btn-lg btn-info btn-simple" to={props.link} style={{backgroundColor: 'rgba(0,0,0,.07)'}}>
        <i class="material-icons" style={{fontSize: 60}}>add</i>
        <div class="ripple-container"></div>
        <h5 style={{letterSpacing: '1px'}}> Take a new assessment </h5>
      </Link>
    </div>

  )
})

class Dashboard extends Component {

componentWillMount() {
  const userId = localStorage.getItem('userId')
  this.props.getAssessments(userId)
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
