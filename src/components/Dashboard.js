import * as Actions from '../actions/assessments';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
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

var Chartist = require("chartist");

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
              return <ScoreCard key={index} assessment={assessment}/>
          })}
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
