import React, { Component } from 'react';
import Criteria from './Criteria';
import * as Actions from '../actions/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import uuidv1 from 'uuid/v1';

const CompetencyButton = props => {
  return (
    <li className={props.isActive}
      onClick={() => {
        props.setActiveComp(props.index)
      }}>
      <a href="#dashboard-2" role="tab" data-toggle="tab" aria-expanded="true">
        <i className="material-icons">{props.icon}</i> {props.name}
      </a>
    </li>
  )
}

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

  setActiveComp(index) {
    this.setState({
      activeCompetencyIndex: index
    })
  }

  renderCompetencyButtons() {
    if (this.props.assessment.assessmentObject) {
      console.log("Assessment:", this.props.assessment)
      const asessementParsed = {
        ...this.props.assessment.assessmentObject,
        rubricJSON: JSON.parse(this.props.assessment.assessmentObject.rubricJSON)
      }
      console.log('ASESSEMENTPARSED', asessementParsed)
      return asessementParsed.Competencies.map((comp, index) => {
        var active = "";
        if (index === this.state.activeCompetencyIndex) {
          active = "active";
        }
        return (
          this.getIsFetching() ? "" :
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

  renderCompetencies() {
    if (this.props.assessment.assessmentObject) {
      const asessementParsed = {
        ...this.props.assessment.assessmentObject,
        rubricJSON: JSON.parse(this.props.assessment.assessmentObject.rubricJSON)
      }
      return asessementParsed.Competencies.map((comp, index) => {
        var active = "";
        if (index === this.state.activeCompetencyIndex) {
          active = "active";
        }
        return (
          <div className={`tab-pane ${active}`} key={uuidv1()} id="dashboard-2">
            {this.getIsFetching() ? "" : this.renderLevels(index)}
          </div>
        )
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
          <table key={uuidv1()} className="table">
            <tbody key={uuidv1()} >
              {this.renderCriteriaForLevel(index + 1, compIndex)}
            </tbody>
          </table>
        </div>
      )
    })
  }

  renderCriteriaForLevel(level, compIndex) {
    if (this.props.assessment.assessmentObject.rubricJSON.Competencies) {
      return this.props.assessment.assessmentObject.rubricJSON.Competencies[compIndex].Scales.map((scale, index) => {
        // if the criteria level matches the level parameter, add the
        // criteria component
        return scale.Criteria.filter(criteria => criteria.level === level).map((criteria, index) => {
          return <Criteria
            key={uuidv1()}
            answer={criteria.answer}
            id={criteria.id}
            text={criteria.text} />
        })
      })
    }
  }

  getIsFetching() {
    if (this.props.assessment == null || this.props.assessment.isFetching == null) {
      return true;
    }
    return this.props.assessment.isFetching;
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title"> {this.getIsFetching() ? "" : this.props.assessment.assessmentObject.rubricJSON.name + " "}
              <small className="category">{this.getIsFetching() ? "" : this.props.assessment.assessmentObject.rubricJSON.description}</small>
            </h4>
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
