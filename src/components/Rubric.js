import React, { Component } from 'react';
import Criteria from './Criteria';
import { Link } from 'react-router-dom';
import * as Actions from '../actions/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import uuidv1 from 'uuid/v1';
import mixpanel from 'mixpanel-browser';

const CompetencyButton = props => (
    <li className={props.isActive}
      onClick={() => {
        props.setActiveComp(props.index)
      }}>
      <a href="" onClick={(e) => e.preventDefault()} role="tab" data-toggle="tab" aria-expanded="true">
         {props.name}
        </a>
      </li>
    )

const PreviousButton = props => (
    <button className="btn btn-lg btn-rose btn-round btn-simple"  style={{backgroundColor: 'rgba(0,0,0,.04)'}}
      onClick={(e) => {
        e.preventDefault();
        props.setActiveComp(props.activeIndex - 1);
      }}>
      <div className="ripple-container"></div>
      <h5 style={{letterSpacing: '1px'}}> Previous </h5>
    </button>
  )


const NextButton = props => (
    <button className="btn btn-lg btn-rose btn-round btn-simple"  style={{backgroundColor: 'rgba(0,0,0,.04)'}}
      onClick={(e) => {
        e.preventDefault();
        props.setActiveComp(props.activeIndex + 1);
      }}>
      <div className="ripple-container"></div>
      <h5 style={{letterSpacing: '1px'}}> Next </h5>
    </button>
  )

const FinishButton = withRouter(props => {
  return (
    <Link className="btn btn-lg btn-rose btn-round btn-simple" to={`/dashboard`} style={{backgroundColor: 'rgba(0,0,0,.04)'}}>
      <div className="ripple-container"></div>
      <h5 style={{letterSpacing: '1px'}}> Finish </h5>
    </Link>
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
      this.renderNextOrFinish = this.renderNextOrFinish.bind(this);
      this.setActiveComp = this.setActiveComp.bind(this);
      this.renderPreviousButton = this.renderPreviousButton.bind(this);
    }

    componentWillMount() {
      const id = this.props.match.params.id;
      this.props.getAssessment(localStorage.getItem("userId"), id);
    }

    componentDidMount() {
      mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
      mixpanel.track("Rubric Component Page");
    }

    renderCriteriaForLevel(level, compIndex) {
      const { Competencies } = this.props.assessment.assessmentObject.rubricJSON;
      if (Competencies) {
        return Competencies[compIndex].Scales.map((scale, index) => {
          // if the criteria level matches the level parameter, add the
          // criteria component
          return scale.Criteria.filter(criteria => criteria.level === level).map((criteria, index) => {
            return <Criteria
              key={criteria.id}
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
        }).sort((a , b) => {
          return a.id - b.id;
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
              setActiveComp={this.setActiveComp}
              />
          )
        }).sort((a , b) => {
          return a.id - b.id;
        })
      }
    }
    getIsFetching() {
      const { assessmentObject } = this.props.assessment;
      if (!assessmentObject) {
        return true;
      }
      return false;
    }

    renderNextOrFinish() {
      const { assessmentObject } = this.props.assessment;
      if (assessmentObject) {
        const { Competencies } = assessmentObject.rubricJSON;
        if ( this.state.activeCompetencyIndex === Competencies.length - 1) {
          return <FinishButton />
        } else {
          return <NextButton activeIndex={this.state.activeCompetencyIndex} setActiveComp={this.setActiveComp} />
        }
      }
    }

    renderPreviousButton() {
      const { assessmentObject } = this.props.assessment;
      if (assessmentObject) {
        const { Competencies } = assessmentObject.rubricJSON;
        if ( this.state.activeCompetencyIndex !== 0) {
          return <PreviousButton activeIndex={this.state.activeCompetencyIndex} setActiveComp={this.setActiveComp} />
        }
      }
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
                  <ul className="nav nav-pills nav-pills-rose nav-stacked" role="tablist">
                    {this.renderCompetencyButtons()}
                  </ul>
                </div>
                <div className="col-md-10">
                  <div className="tab-content">
                    {this.renderCompetencies()}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2"> </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div className="col-md-2" style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                    {this.renderPreviousButton()}
                  </div>
                  <div className="col-md-2" style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                    {this.renderNextOrFinish()}
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
