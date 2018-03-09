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

  render() {
    return (
      <div>
        <div className="row">
          <ScoreCard />
        </div>
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))
