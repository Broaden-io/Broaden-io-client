import React, { Component } from 'react';
import Criteria from './Criteria';
import * as Actions from '../actions/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import uuidv1 from 'uuid/v1';

const CompetencyButton = withRouter(props => {
  return (
    <li className={props.isActive}
      onClick={() => {
        props.setActiveComp(props.index)
      }}>
      <a href="" onClick={(e) => e.preventDefault()} role="tab" data-toggle="tab" aria-expanded="true">
        <i className="material-icons">{props.icon}</i> {props.name}
        </a>
      </li>
    )
  })

  class Rubric extends Component {

    constructor(props) {
      super(props);
      this.state = {
        activeCompetencyIndex: 0
      }
      this.icons = [ "dashboard", "explore", "code", "backup", "lock", "bug_report", "line_style", "perm_identity", "star_rate" ]
      this.renderCompetencies = this.renderCompetencies.bind(this);
      this.renderCompetencyButtons = this.renderCompetencyButtons.bind(this);
      this.renderCriteriaForLevel = this.renderCriteriaForLevel.bind(this);
      this.renderLevels = this.renderLevels.bind(this);
      this.getIsFetching = this.getIsFetching.bind(this);
    }

    componentWillMount() {
      const id = this.props.match.params.id;
      this.props.getAssessment(localStorage.getItem("userId"), id);
    }

    renderCriteriaForLevel(level, compIndex) {
      const { Competencies } = this.props.assessment.assessmentObject.rubricJSON;
      if (Competencies) {
        return Competencies[compIndex].Scales.map((scale, index) => {
          // if the criteria level matches the level parameter, add the
          // criteria component
          return scale.Criteria.filter(criteria => criteria.level === level).map((criteria, index) => {
            return <Criteria
              key={uuidv1()}
              answer={criteria.answer}
              id={criteria.id}
              text={criteria.text} />
            }).sort((a , b) => {
              return a.id - b.id;
            })
          }).sort((a , b) => {
            return a.id - b.id;
          })
        }
      }

    renderLevels(compIndex) {
      const levelNames = ['Initial', 'Approaching', 'Overtaking', 'Innovating'];
      return levelNames.map((levelName, index) => {
        return (
          <div key={uuidv1()} className='col-md-3'>
            <h3> {levelName} </h3>
            <hr />
            <table className="table">
              <tbody >
                {this.renderCriteriaForLevel(index + 1, compIndex)}
              </tbody>
            </table>
          </div>
        )
      })
    }                                       

    renderCompetencies() {
      const { assessmentObject } = this.props.assessment;
      if (assessmentObject) {
        const { Competencies } = assessmentObject.rubricJSON;
        return Competencies.map((comp, index) => {
          let active = '';
          if (index === this.state.activeCompetencyIndex) {
            active = 'active';
          }
          return (
            <div className={`tab-pane ${active}`} key={uuidv1()} id="dashboard-2">
              {this.getIsFetching() ? null : this.renderLevels(index)}
            </div>
          )
        })
      }
    }

    setActiveComp(index) {
      this.setState({ activeCompetencyIndex: index })
    }

    renderCompetencyButtons() {
      const { assessmentObject } = this.props.assessment;
      if (assessmentObject) {
        const { Competencies } = assessmentObject.rubricJSON;
        return Competencies.map((comp, index) => {
          let active = '';
          if (index === this.state.activeCompetencyIndex) {
            active = 'active';
          }
          return (
            <CompetencyButton
              name={comp.name}
              key={uuidv1()}
              index={index}
              isActive={active}
              icon={this.icons[index]}
              setActiveComp={this.setActiveComp.bind(this)}
              />
          )
        })
      }
    }

    getIsFetching() {
      const { assessment } = this.props;
      const { isFetching } = assessment;
      if (assessment === null || isFetching == null) {
        return true;
      }
      return isFetching;
    }

    render() {
      const { assessment } = this.props;
      const { isFetching } = assessment;
      return (
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title"> {this.getIsFetching() ? null : assessment.assessmentObject.rubricJSON.name + " "}
                <br/> <small className="category">{this.getIsFetching() ? null : assessment.assessmentObject.rubricJSON.description}</small>
              </h2>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col-md-2">
                  <ul className="nav nav-pills nav-pills-icons nav-pills-rose nav-stacked" role="tablist">
                    {this.renderCompetencyButtons()}
                  </ul>
                </div>
                <div className="col-md-10">
                  <div className="tab-content">
                    {this.renderCompetencies()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    assessment: state.assessment
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rubric));
