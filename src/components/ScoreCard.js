import React, { Component } from 'react';
import { withRouter } from 'react-router'
import ChartistGraph from 'react-chartist';

class CompetencyScore extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td><h5>{this.props.name}</h5></td>
        <td>
          <h4 className="text-default">
            <strong>{this.props.score}%</strong>
          </h4>
        </td>
      </tr>
    )
  }
}

class ScoreCard extends React.Component {

  state = { competencyScore: [] }

  calculateCompetencyScore(competency) {

    const scoreTotals = {
      userTotal: 0,
      competencyTotal: 0
    }

    const { Scales } = competency

    Scales.map((scale, index) => {
      scale.Criteria.map((criterion, index) => {
        criterion.answer && (scoreTotals.userTotal += criterion.level)
        scoreTotals.competencyTotal += criterion.level
      })
    })

    const score = scoreTotals.competencyTotal === 0 ? 0 : (scoreTotals.userTotal/scoreTotals.competencyTotal *100)
    return score.toFixed(0)
  }

  render() {
    const assessment = this.props.assessment.rubricJSON
    const { name, description, Competencies } = assessment
    return (
      <div className="col-md-5">
        <div className="card">
          <div className="card-header card-header-icon" data-background-color="blue">
            <i className="material-icons">pie_chart</i>
          </div>
          <div className="card-content">
            <div className="typography">

              <h4 className="card-title">{name}</h4>
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
                <div className="table-responsive">
                  <table className="table">
                    <thead className="text-primary">
                      <tr>
                        <th>Competency</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Competencies.map((competency, index) => {
                        const score = this.calculateCompetencyScore(competency)
                        return <CompetencyScore key={index} score={score} name={competency.name} />
                      })}
                    </tbody>
                  </table>
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
