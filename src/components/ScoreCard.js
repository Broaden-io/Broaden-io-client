import React, { Component } from 'react';
import { withRouter } from 'react-router'
import ChartistGraph from 'react-chartist';

class ScoreCard extends React.Component {
  render() {

    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    var type = 'Bar'

    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header card-header-icon" data-background-color="blue">
            <i className="material-icons">pie_chart</i>
          </div>
          <div className="card-content">
            <div className="typography">

              <h3 className="card-title">Full Stack Web Skills</h3>
              <div className="row">

                <div className="justify-content-center">
                  <div className="col-sm-5">
                    <span className="tim-note">OVERALL SCORE</span>
                    <h1>81%</h1>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="progress progress-line-info">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100" style={{width: '81%'}}>
                      <span className="sr-only">81% Complete</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/*<h6 className="text-left">HTML and Templating  </h6>
            <h3>92%</h3>
            <div className="col-xs-12">
            <div className="progress progress-line-info">
            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100" style={{width: '81%'}}>
            <span className="sr-only">92% Complete</span>
            </div>
            </div>
            </div>*/}
          </div>


          <div id="chartPreferences" className="ct-chart"></div>
          {/*<ChartistGraph data={data} options={options} type={type} />*/}
          <div className="card-footer">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="text-primary">
                        <tr>
                          <th>Competency</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><h5>HTML and Templating</h5></td>
                          <td><h4 className="text-success"><strong>92%</strong></h4></td>
                        </tr>
                        <tr>
                          <td><h5>CSS</h5></td>
                          <td><h4 className="text-warning"><strong>77%</strong></h4></td>
                        </tr>
                        <tr>
                          <td><h5>Client-Side Javascript</h5></td>
                          <td><h4 className="text-success"><strong>94%</strong></h4></td>
                        </tr>
                        <tr>
                          <td><h5>Backend Skills</h5></td>
                          <td><h4 className="text-info"><strong>84%</strong></h4></td>
                        </tr>
                        <tr>
                          <td><h5>DevOps and Security</h5></td>
                          <td><h4 className="text-warning"><strong>70%</strong></h4></td>
                        </tr>
                        <tr>
                          <td><h5>Testing and Debugging</h5></td>
                          <td><h4 className="text-info"><strong>82%</strong></h4></td>
                        </tr>
                        <tr>
                          <td><h5>Databases - SQL and NoSQL</h5></td>
                          <td><h4 className="text-danger"><strong>68%</strong></h4></td>
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
    )
  }
}

export default withRouter(ScoreCard);
