import React, { Component } from 'react';
import Criteria from './Criteria';
import { Link } from 'react-router-dom';
import * as Actions from '../actions/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import uuidv1 from 'uuid/v1';
import mixpanel from 'mixpanel-browser';


class Learning extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCompetencyIndex: 0
    }
    this.icons = [ "dashboard", "explore", "code", "backup", "lock", "bug_report", "line_style", "perm_identity", "star_rate" ]
    this.getIsFetching = this.getIsFetching.bind(this);
    this.setActiveComp = this.setActiveComp.bind(this);
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getAssessment(localStorage.getItem("userId"), id);
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Learning Mode Page");
  }

  setActiveComp(index) {
    this.setState({ activeCompetencyIndex: index })
  }

  getIsFetching() {
    const { assessmentObject } = this.props.assessment;
    if (!assessmentObject) {
      return true;
    }
    return false;
  }

  render() {

    const { assessment } = this.props;
    const { isFetching } = assessment;
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              {this.getIsFetching() ? null : assessment.assessmentObject.rubricJSON.name + " "}
              <br/> <small className="category">
                {this.getIsFetching() ? null : assessment.assessmentObject.rubricJSON.description}
              </small>
            </h2>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col-md-2">
                <ul className="nav nav-pills nav-pills-rose nav-stacked" role="tablist">
                </ul>
              </div>
              <div className="col-md-10">
                <div className="tab-content">
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"> </div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className="col-md-2" style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                </div>
                <div className="col-md-2" style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Learning));
