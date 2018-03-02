import React, { Component } from 'react';
import ChartCard from './ChartCard'
import ChartistGraph from "react-chartist";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../variables/charts";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import "../assets/css/material-dashboard-react.css";

var Chartist = require("chartist");

class Dashboard extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            {/* https://gionkunz.github.io/chartist-js/examples.html */}
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={{
                    labels: ["Week 5", "Week 6", "Week 7", "Week 8"],
                    series: [[1, 5, 3, 7]]
                  }}
                  type="Line"
                  options={{
                    lineSmooth: Chartist.Interpolation.cardinal({
                      tension: 0
                    }),
                    showArea: true,
                    low: 0,
                    high: 10,
                    chartPadding: {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    }
                  }}
                  listener={completedTasksChart.animation}
                />
            }
              chartColor="red"
              title="Weekly Progress"
              text="Number of criteria completed per week across all rubrics"
              statIcon={AccessTime}
              statText="Last criteria completed 2 days ago"
            />
              </div>

              <div className="col-md-4">
                {/* https://gionkunz.github.io/chartist-js/examples.html */}
                <ChartCard
                  chart={
                    <ChartistGraph
                      className="ct-chart"
                      data={{
                        labels: ["HTML", "CSS", "JS", "Misc"],
                        series: [[80, 90, 40, 50]]
                      }}
                      type="Bar"
                      options={{
                        stackBars: true,
                        low: 0,
                        high: 100,
                        chartPadding: {
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0
                        }
                      }}
                      listener={emailsSubscriptionChart.animation}
                    />
                }
                  chartColor="green"
                  title="Criterion Progress"
                  text="Percent of completed for each criterion in starred rubric"
                  statIcon={AccessTime}
                  statText="Starred Rubric: 'Full Stack Web'"
                />
                  </div>

                  <div className="col-md-4">
                    {/* https://gionkunz.github.io/chartist-js/examples.html */}
                    <ChartCard
                      chart={
                        <ChartistGraph
                          className="ct-chart"
                          data={{
                            series: [[75,25]]
                          }}
                          type="Bar"
                          options={{
                            axisX: {
                                      labelInterpolationFnc: function(value, index) {
                                        return index % 2 === 0 ? value : null;
                                      }
                                    },
                            donut: true,
                            stackBars: true,
                            showLabels: true,
                            chartPadding: {
                              top: 0,
                              right: 0,
                              bottom: 0,
                              left: 0
                            }
                          }}
                          listener={emailsSubscriptionChart.animation}
                        />
                    }
                      chartColor="purple"
                      title="Relative Progress"
                      text="Your progress on your starred rubric compared to your friends."
                      statIcon={AccessTime}
                      statText="Starred Rubric: 'Full Stack Web'"
                    />
                      </div>
                </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="card card-stats">
                            <div className="card-header" data-background-color="orange">
                              <i className="material-icons">dashboard</i>
                            </div>
                            <div className="card-content">
                              <p className="category">Rubrics</p>
                              <h3 className="card-title">21</h3>
                            </div>
                            <div className="card-footer">
                              <div className="stats">
                                <i className="material-icons text-success">alarm</i>
                                <a href="o">last started 2 days ago</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="card card-stats">
                            <div className="card-header" data-background-color="rose">
                              <i className="material-icons">equalizer</i>
                            </div>
                            <div className="card-content">
                              <p className="category">Overall Score</p>
                              <h3 className="card-title">75.521</h3>
                            </div>
                            <div className="card-footer">
                              <div className="stats">
                                <i className="material-icons">local_offer</i> tracked against your cohort
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                              <div className="card-header" data-background-color="green">
                                <i className="material-icons">assessment</i>
                              </div>
                              <div className="card-content">
                                <p className="category">Ranking</p>
                                <h3 className="card-title">4,245</h3>
                              </div>
                              <div className="card-footer">
                                <div className="stats">
                                  <i className="material-icons">date_range</i> Last 24 Hours
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                              <div className="card card-stats">
                                <div className="card-header" data-background-color="blue">
                                  <i className="material-icons">supervisor_account</i>
                                </div>
                                <div className="card-content">
                                  <p className="category">Followers</p>
                                  <h3 className="card-title">+76</h3>
                                </div>
                                <div className="card-footer">
                                  <div className="stats">
                                    <i className="material-icons">update</i> Just Updated
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="card">
                                  <div className="card-header card-header-icon" data-background-color="green">
                                    <i className="material-icons">&#xE894;</i>
                                  </div>
                                  <div className="card-content">
                                    <h4 className="card-title">Tracked Rubrics for Assessment</h4>
                                    <div className="row">
                                      <div className="col-md-11">
                                        <div className="table-responsive table-sales">
                                          <table className="table">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <div className="flag">
                                                  </div>
                                                </td>
                                                <td>Advanced Web Patterns</td>
                                                <td className="text-right">
                                                  2.920
                                                </td>
                                                <td className="text-right">
                                                  53.23%
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div className="flag">
                                                  </div>
                                                </td>
                                                <td>React & React-Native</td>
                                                <td className="text-right">
                                                  1.300
                                                </td>
                                                <td className="text-right">
                                                  20.43%
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div className="flag">
                                                  </div>
                                                </td>
                                                <td>Redux and React</td>
                                                <td className="text-right">
                                                  760
                                                </td>
                                                <td className="text-right">
                                                  10.35%
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div className="flag">
                                                  </div>
                                                </td>
                                                <td>Contracting</td>
                                                <td className="text-right">
                                                  690
                                                </td>
                                                <td className="text-right">
                                                  7.87%
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div className="flag">
                                                  </div>
                                                </td>
                                                <td>Data Structures & Algorithms</td>
                                                <td className="text-right">
                                                  600
                                                </td>
                                                <td className="text-right">
                                                  5.94%
                                                </td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <div className="flag">
                                                  </div>
                                                </td>
                                                <td>Technical Interviewing</td>
                                                <td className="text-right">
                                                  550
                                                </td>
                                                <td className="text-right">
                                                  4.34%
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-12">
                                <div className="card">
                                  <div className="card-header card-header-tabs" data-background-color="rose">
                                    <div className="nav-tabs-navigation">
                                      <div className="nav-tabs-wrapper">
                                        <span className="nav-tabs-title">Tasks:</span>
                                        <ul className="nav nav-tabs" data-tabs="tabs">
                                          <li className="active">
                                            <a href="#profile" data-toggle="tab">
                                              <i className="material-icons">check_circle</i> Actions
                                                <div className="ripple-container"></div>
                                              </a>
                                            </li>
                                            <li className="">
                                              <a href="#messages" data-toggle="tab">
                                                <i className="material-icons">extension</i> Learning
                                                  <div className="ripple-container"></div>
                                                </a>
                                              </li>
                                              <li className="">
                                                <a href="#settings" data-toggle="tab">
                                                  <i className="material-icons">assessment</i> Assessments
                                                    <div className="ripple-container"></div>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="card-content">
                                          <div className="tab-content">
                                            <div className="tab-pane active" id="profile">
                                              <table className="table">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" />
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" defaultChecked />
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" defaultChecked />
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                    </td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" />
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            <div className="tab-pane" id="messages">
                                              <table className="table">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" defaultChecked /><span className="checkbox-material"><span className="check"></span></span>
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                    </td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" /><span className="checkbox-material"><span className="check"></span></span>
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                            <div className="tab-pane" id="settings">
                                              <table className="table">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" /><span className="checkbox-material"><span className="check"></span></span>
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" defaultChecked /><span className="checkbox-material"><span className="check"></span></span>
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                    </td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <div className="checkbox">
                                                        <label>
                                                          <input type="checkbox" name="optionsCheckboxes" /><span className="checkbox-material"><span className="check"></span></span>
                                                        </label>
                                                      </div>
                                                    </td>
                                                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                    <td className="td-actions text-right">
                                                      <button type="button" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs" data-original-title="Edit Task">
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                                        <i className="material-icons">close</i>
                                                      </button>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>


                              );
                            }
                          }

                          export default Dashboard;
