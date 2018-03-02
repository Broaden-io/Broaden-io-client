import React, { Component } from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography
} from "material-ui";
import PropTypes from "prop-types";

import chartCardStyle from "../variables/styles/chartCardStyle";

class ChartCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sidebarIsMini: this.props.statsIconColor ? this.props.statsIconColor : "gray",
      chartColor: this.props.chartColor ? this.props.chartColor : "gray",
    }
  }

  propTypes = {
    classes: PropTypes.object.isRequired,
    chart: PropTypes.object.isRequired,
    title: PropTypes.node,
    text: PropTypes.node,
    statIcon: PropTypes.func.isRequired,
    statIconColor: PropTypes.oneOf([
      "warning",
      "primary",
      "danger",
      "success",
      "info",
      "rose",
      "gray"
    ]),
    chartColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
    statLink: PropTypes.object,
    statText: PropTypes.node
  };

  render() {
  return(
    <div>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"/>
      <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
    <Card className={this.props.card}>
      <CardHeader
        style={
          chartCardStyle[this.props.chartColor+"CardHeader"]
        }
        subheader={this.props.chart}
      />
      <CardContent className={this.props.cardContent}>
        <Typography variant="title" component="h4" className={this.props.cardTitle}>
          {this.props.title}
        </Typography>
        <Typography component="p" className={this.props.cardCategory}>
          {this.props.text}
        </Typography>
      </CardContent>
      <CardActions className={this.props.cardActions}>
        <div className={this.props.cardStats}>
          <this.props.statIcon
            className={
              this.props.cardStatsIcon +
              " " + this.props.statIconColor + "CardStatsIcon"
            }
          />{" "}
          {this.props.statLink !== undefined ? (
            <a href={this.props.statLink.href} className={this.props.cardStatsLink}>
              {this.props.statLink.text}
            </a>
          ) : this.props.statText !== undefined ? (
            this.props.statText
          ) : null}
        </div>
      </CardActions>
    </Card>
  </div>
  );
}
}



export default withStyles(chartCardStyle)(ChartCard);
