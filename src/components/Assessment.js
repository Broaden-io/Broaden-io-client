import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import Criterion from './Criterion'

class Assessment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      competencies: [],
      totalPointsLeft: 0,
    }
  }

  componentDidMount() {

  }

  getCompetencyForCriteriaId(criteria) {
    const { assessment } = this.props
    const { scaleId } = criteria
    const competency = assessment.Competencies.filter((competency) => {
      var isCompetency = false
      competency.Scales.forEach((scale) => {
        if (scale.id === scaleId) { isCompetency = true }
      })
      return isCompetency
    })
    if (competency.length > 1) {
      console.log(`Warning competency length is greater than 1 when returning from filter.  Filter resulted in ${competency.length} results.`)
    }
    return competency[0]
  }

  updateCompetenciesArray(targetCompetency) {
    const { competencies } = this.state
    var isNewCompetency = true
    competencies.forEach((competency) => {
      if (competency.id === targetCompetency.id) {
        isNewCompetency = false
      }
    })
    if (isNewCompetency) {
      this.setState({
        ...this.state,
        competencies: [
          ...competencies,
          targetCompetency
        ]
      })
    }
  }

  updatePointsLeft(points) {
    this.setState({
      ...this.state,
      totalPointsLeft: this.totalPointsLeft + points
    })
  }

  render() {
    const { criteria, assessment } = this.props
    const { userId } = assessment
    return(
      <div className="col-md-12">

        <h4>Skills you still need to master...</h4>
        {criteria.map((criterion) => {
          return <Criterion key={uuidv1()} data={criterion} owner={userId}/>
        })}
        <div className="material-datatables">

          <table id="datatables" className="table table-striped table-no-bordered table-hover" cellSpacing="0" width="100%" style={{width:`100%`}}>

            <tfoot>
              <tr>
                <th></th>
                <th>TOTAL POINTS LEFT</th>
                <th className="disabled-sorting text-right">{
                  criteria.reduce((acc, criterion) => {
                    return acc + criterion.level
                  }, 0)
                } Pts</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Assessment))
